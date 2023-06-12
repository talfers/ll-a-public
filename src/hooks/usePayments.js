import { createContext, useContext } from 'react';
import db from '../config/firebase';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { loadStripe } from '@stripe/stripe-js';
import config from '../config';


const PaymentsContext = createContext()

export const PaymentsContextProvider = ({children}) => {

  const checkout = async (priceId, userId) => {
    const docRef = await addDoc(collection(db, "customers", userId, "checkout_sessions"), {
        price: priceId,
        success_url: 'https://landlordassist.io/thankyou',
        cancel_url: 'https://landlordassist.io/signup'
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

  const getCurrentPlan = async () => {

  }

  return (
    <PaymentsContext.Provider value={{checkout, getCurrentPlan}}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePayments = () => {
  return useContext(PaymentsContext)
}