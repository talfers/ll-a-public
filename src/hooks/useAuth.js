import { createContext, useContext, useEffect, useCallback } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import db from '../config/firebase';
import { collection, addDoc, onSnapshot, query, getDocs, where } from "firebase/firestore";
import { loadStripe } from '@stripe/stripe-js';
import config from '../config';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    signInWithPopup,
    sendEmailVerification,
    sendPasswordResetEmail
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();


  const getCustomer = useCallback(async (email) => {
    const q = query(collection(db, "customers"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let tempCustomer = {}
    querySnapshot.forEach(async (d) => {
      tempCustomer = d.data();
    })
    return tempCustomer;
    
  }, [])


  const getCurrentPlan = useCallback(async (customerId) => {
    const q = query(collection(db, "customers", customerId, "subscriptions"));
    const querySnapshot = await getDocs(q);
    let tempSub = {}
    querySnapshot.forEach(async (sub) => {
      tempSub.role = sub.data().role
      tempSub.plan = sub.data().items.slice(-1)[0]
      tempSub.status = sub.data().status
      tempSub.current_period_end = sub.data().current_period_end.seconds
      tempSub.current_period_end_date = new Date(sub.data().current_period_end.seconds * 1000).toLocaleDateString("en-US")
      tempSub.current_period_start =  sub.data().current_period_start.seconds 
      tempSub.current_period_start_date = new Date(sub.data().current_period_start.seconds * 1000).toLocaleDateString("en-US")
    })
    return tempSub
  }, [])

  const addUser = useCallback((user) => {
    setUser(user)
  }, [setUser])

  useEffect(() => {
    const listener = onAuthStateChanged(config.auth, async (user) => {
      
      addUser(user);
    });
    let customer = getCustomer(user.email)
    console.log(customer);
    let plan = getCurrentPlan(customer.stripeId)
    let tempUser = { uid: user.uid, email: user.email, emailVerified: user.emailVerified, selectedPlan: customer.selectedPlan, plan }
    addUser(tempUser);
    return () => {
      listener();
    };
  }, [addUser, getCurrentPlan, getCustomer, user.email]);


  const signUp = async (email, password, selectedPlan) => {
      let { user } =  await createUserWithEmailAndPassword(config.auth, email, password);
      let tempUser = { uid: user.uid, email: user.email, emailVerified: user.emailVerified, selectedPlan }
      setUser(tempUser)
      return tempUser
  }


  const signIn = async (email, password) => {
      let customer = await getCustomer(email)
      let plan = await getCurrentPlan(customer.stripeId)
      let { user } =  await signInWithEmailAndPassword(config.auth, email, password);
      let tempUser = { uid: user.uid, email: user.email, emailVerified: user.emailVerified, selectedPlan: customer.selectedPlan, plan }
      console.log("TEMP USER", tempUser);
      setUser(tempUser)
      return tempUser
  }


  const signInWithGoogle = async (selectedPlan, loadCheckout) => {
    const { user } = await signInWithPopup(config.auth, config.provider)
    console.log(user.email);
    let customer = await getCustomer(user.email)
    let plan = await getCurrentPlan(customer.stripeId)
    let tempUser = { uid: user.uid, email: user.email, emailVerified: user.emailVerified, selectedPlan: customer.selectedPlan, plan }
    setUser(tempUser)
  }


  const signUpWithGoogle = async (selectedPlan, loadCheckout) => {
    
    const { user } = await signInWithPopup(config.auth, config.provider)
    navigate("/google")
    await checkout(selectedPlan, user.uid)
    console.log("USER IN USE AUTH", user);
    console.log("RES",user);
    setUser(user)
  }


  const logOut = async () => {
      await signOut(config.auth);
      setUser(null)
  }
  

  const verificationEmail = async () => {
    await sendEmailVerification(config.auth.currentUser);
  }


  const sendResetPasswordEmail = async (email) => {
    await sendPasswordResetEmail(config.auth, email);
  }


  const checkout = async (priceId, userId) => {
    const docRef = await addDoc(collection(db, "customers", userId, "checkout_sessions"), {
        price: priceId,
        // success_url: 'https://landlordassist.io/thankyou',
        success_url: 'http://localhost:3000/thankyou',
        // cancel_url: 'https://landlordassist.io/signup',
        cancel_url: 'http://localhost:3000/signup',
    });
    onSnapshot(docRef, async (snap) => {
        const {error, sessionId} = snap.data()
        if(error) {
            alert(`An error occured: ${error.message}`)
        } 
        if(sessionId) {
            const stripe = await loadStripe(config.REACT_APP_STRIPE_PUBLIC_KEY);
            await stripe.redirectToCheckout({ sessionId });
        }
    })
  }

  
  const manageSubscription = async () => {
    alert('feature not enabled yet')
    // try {
    //   let res = await axios.post('http://localhost:5000/manage', {
    //     customer: customerId,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //   console.log(res);
    //   window.location.href = res.data.url;
    // } catch(err) {
    //   console.log(err.message);
    //   alert(err.message)
    // }
  }


  


  const addCollection = useCallback(async (customerId, collectionName, dict) => {
    try {
      const customerRef = collection(db, 'customers', customerId);
      const orderRef = await addDoc(collection(customerRef, collectionName), dict);
      console.log('Order added with ID: ', orderRef.id);
    } catch (error) {
      console.error('Error adding order: ', error);
    }
  }, [])


  return (
    <AuthContext.Provider 
      value={{
        user, 
        signIn, 
        signUp, 
        signInWithGoogle,
        signUpWithGoogle,
        logOut, 
        verificationEmail, 
        sendResetPasswordEmail,
        checkout,
        manageSubscription,
        getCurrentPlan,
        getCustomer,
        addCollection
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}