import { createContext, useContext, useEffect, useState } from 'react';
import db from '../config/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { faChessKnight, faChessQueen, faChessPawn } from '@fortawesome/free-solid-svg-icons';

const PlansContext = createContext()

export const PlansContextProvider = ({children}) => {
  const [plans, setPlans] = useState([]);
  const [showPlans, setShowPlans] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  
  useEffect(() => {
    const fetchPlans = async () => {
      const icons = [faChessPawn, faChessKnight, faChessQueen]
      const queries = [100, 1000, 10000];
      try {
        const q = query(collection(db, "products"), where("active", "==", true));
        const querySnapshot = await getDocs(q);
        const products = []
        let i = 0;
        querySnapshot.forEach(async (productDoc) => {
          let product = Object(productDoc.data());
          product.id = productDoc.id
          product.icon = icons[i];
          product.up_to = queries[i];
          i++;
          const priceSnapshot = await getDocs(collection(db, "products", productDoc.id, "prices"));
          priceSnapshot.forEach((price) => {
            product.prices = {
                priceId: price.id,
                priceData: Object(price.data())
            }
          });
          
          products.push(product)
        });
        setPlans(products);
        setShowPlans(1);
      } catch (err) {
        console.log(err.message);
        
      }
      
    };
    fetchPlans();
  }, []);


  return (
    <PlansContext.Provider value={{ plans, showPlans, setShowPlans, selectedPlan, setSelectedPlan }}>
      {children}
    </PlansContext.Provider>
  )
}

export const usePlans = () => {
  return useContext(PlansContext)
}