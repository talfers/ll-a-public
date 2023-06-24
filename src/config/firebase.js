// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import keys from '../keys';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: keys.REACT_APP_FIREBASE_API_KEY,
  // authDomain: "landlordassist.io",
  authDomain: "http://localhost:3000",
  projectId: "landlord-assistant",
  storageBucket: "landlord-assistant.appspot.com",
  messagingSenderId: "831902295561",
  appId: "1:831902295561:web:87ed0743fe5085acafbad8",
  measurementId: "G-J893DM2X0B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default db;