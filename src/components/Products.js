import React, { useState, useEffect } from 'react';
import db from "../config/firebase";
import { UserAuth } from '../context/AuthContext';
import { getDocs, addDoc, onSnapshot, collection } from "firebase/firestore";
import { ProductsContainerStyled, ProductContainerStyled, IconContainerStyled } from '../styles/Products';
import { PrimaryButtonStyled } from '../styles/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight, faChessQueen, faChessPawn } from '@fortawesome/free-solid-svg-icons'



function Products(props) {
    const { user } = UserAuth()
    const [tiers, setTiers] = useState([])
    
    console.log(user?.uid);

    useEffect(() => {
        const titles = ['Good', 'Better', 'Best']
        const icons = [faChessPawn, faChessKnight, faChessQueen]
        const fetchTiers = async () => {
            let querySnapshot = await getDocs(collection(db, "products"));
            const productData = querySnapshot.docs             
            productData.forEach(async (d) => {
                console.log(d);
                const qst = await getDocs(collection(db, "products", d.id, "prices"));
                qst.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    let pricesData = doc.data()
                    let updatedTiers = [...pricesData.tiers]
                    updatedTiers.forEach((t, i) => {
                        t.priceId = doc.id;
                        t.name = titles[i];
                        t.icon = icons[i];
                    })
                    setTiers(updatedTiers)
                });        

            });
        }
        fetchTiers()
    }, [])
    console.log(tiers);
    const checkout = async (tierId) => {
        console.log(tierId);
        console.log(user.uid);
        let collectionRef = collection(db, "customers", user.uid, "checkout_sessions");
        const docRef = await addDoc(collectionRef, {
            tier: tierId,
            success_url: window.location.origin + "/",
            cancel_url: window.location.origin + "/products"
        });
        
        onSnapshot(docRef, (snap) => {
            console.log(snap.data());
            const { error, url } = snap.data();
            if(error) {
                console.error(`An error has occured: ${error.message}`);
            }
            if(url) {
                window.location.assign(url)
            }
        })
    }


    const createTiers = () => {
        return tiers.map((t, i) => (
            <ProductContainerStyled key={i}>
                <IconContainerStyled>
                    <FontAwesomeIcon icon={t.icon} size={"2xl"} color={'inherit'}/>
                </IconContainerStyled>
                
                <h2>{t.name}</h2>
                <p><strong>Price:</strong> ${t.flat_amount/100} / month</p>
                <p>{i===tiers.length-1?<strong>Unlimited</strong>:<span><strong>Up to: </strong>{t.up_to}</span>} queries / month</p>
                <br/>
                <PrimaryButtonStyled onClick={() => checkout(t.priceId)}>Subscribe</PrimaryButtonStyled>
            </ProductContainerStyled>
        ))
    }

    console.log(tiers);

    return (
        <ProductsContainerStyled>
            {tiers.length===0?null:
            createTiers()
            }
        </ProductsContainerStyled>
    );
}

export default Products;