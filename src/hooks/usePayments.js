import { createContext, useContext, useCallback } from 'react';
import db from '../config/firebase';
import { collection, addDoc, onSnapshot, query, getDocs } from "firebase/firestore";
import { loadStripe } from '@stripe/stripe-js';
import config from '../config';


const PaymentsContext = createContext()

export const PaymentsContextProvider = ({children}) => {

  const checkout = async (priceId, userId) => {
    const docRef = await addDoc(collection(db, "customers", userId, "checkout_sessions"), {
        price: priceId,
        success_url: 'http://localhost:3000/thankyou',
        cancel_url: 'http://localhost:3000/signup'
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

  const getCurrentPlan = useCallback(async (userId) => {
    const q = query(collection(db, "customers", userId, "subscriptions"));
    const querySnapshot = await getDocs(q);
    let tempSub = {}
    querySnapshot.forEach(async (sub) => {
      console.log(sub.data());
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

  return (
    <PaymentsContext.Provider value={{checkout, getCurrentPlan}}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePayments = () => {
  return useContext(PaymentsContext)
}