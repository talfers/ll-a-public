import { createContext, useContext, useCallback } from 'react';
import db from '../config/firebase';
import { collection, addDoc, onSnapshot, query, getDocs, where } from "firebase/firestore";
import { loadStripe } from '@stripe/stripe-js';
import config from '../config';


const PaymentsContext = createContext()

export const PaymentsContextProvider = ({children}) => {

  const checkout = async (priceId, userId, success_endpoint, cancel_endpoint) => {
    const docRef = await addDoc(collection(db, "customers", userId, "checkout_sessions"), {
        price: priceId,
        success_url: `${config.REACT_APP_PROD_URL}${success_endpoint}`,
        cancel_url: `${config.REACT_APP_PROD_URL}${cancel_endpoint}`,
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
    alert('Feature under construction')
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


  const getCustomer = useCallback(async (email) => {
    const q = query(collection(db, "customers"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let tempCustomer = {}
    querySnapshot.forEach(async (d) => {
      tempCustomer = d.data();
    })
    return tempCustomer;
    
  }, [])


  const getCurrentPlan = useCallback(async (userId) => {
    const q = query(collection(db, "customers", userId, "subscriptions"));
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
  

  return (
    <PaymentsContext.Provider value={{checkout, getCurrentPlan, getCustomer, manageSubscription}}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePayments = () => {
  return useContext(PaymentsContext)
}