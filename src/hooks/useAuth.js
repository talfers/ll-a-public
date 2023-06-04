import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth';
import { auth as fbAuth, provider } from '../config/firebase';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null);

  useEffect(() => {
    const listener = onAuthStateChanged(fbAuth, async (user) => {
      setUser(user);
      
    });

    return () => {
      listener();
    };
  }, [setUser]);

  const signUp = async (email, password) => {
      let a =  await createUserWithEmailAndPassword(fbAuth, email, password);
      setUser(a)
  }

  const signIn = async (email, password) => {
      let a =  await signInWithEmailAndPassword(fbAuth, email, password);
      setUser(a)
  }

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(fbAuth, provider)
      setUser(user)
    } catch(err) {
      console.log(err.message);
    }
  }


  const logOut = async () => {
      await signOut(fbAuth);
      setUser(null)
  }


  const value = useMemo(
    () => ({
      user
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={{...value, signIn, signUp, signInWithGoogle, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}