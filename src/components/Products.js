import React from 'react';
import { 
    ProductsContainerStyled, 
    ProductContainerStyled, 
    IconContainerStyled, 
    CloseButton, 
    ProductModalStyled,
    ButtonContainerStyled
} from '../styles/Products';
import { ContentHeaderStyled } from '../styles/Main';
import { PrimaryButtonStyled } from '../styles/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconWrapper } from '../styles/Main';


function Products(props) {
    
    console.log(props.plans);

    const createPlans = () => {
        return props.plans.map((p, i) => (
            <ProductContainerStyled key={i} selected={props.selectedPlan===p.prices.priceId} onClick={() => {props.setSelectedPlan(p.prices.priceId)}}>
                <IconContainerStyled>
                    <FontAwesomeIconWrapper $theme={'dark'}>
                       <FontAwesomeIcon icon={p.icon} size={"2xl"} color={'inherit'}/>
                    </FontAwesomeIconWrapper>
                </IconContainerStyled>
                <h2>{p.name}</h2>
                <p style={{marginBottom: '20px'}}>{p.description}</p>
                <p><strong>Price:</strong> ${p.prices.priceData.unit_amount/100} / month</p>
                <p><span><strong>Up to: </strong>{p.up_to}</span> queries / month</p>
                <br/>
            </ProductContainerStyled>
        ))
    }

    return (
        
        <ProductModalStyled>
            <CloseButton onClick={() => {props.setShowPlans(0)}}>X</CloseButton>
            <ContentHeaderStyled>Select a Plan</ContentHeaderStyled>
            <ProductsContainerStyled>
                {props.plans.length===0?<div>loading...</div>:
                createPlans()
                }
            </ProductsContainerStyled>
            <ButtonContainerStyled>
                <PrimaryButtonStyled 
                    onClick={() => {
                        props.setSelectedPlan(props.selectedPlan);
                        props.setShowPlans(0);
                    }}
                >
                    Continue
                </PrimaryButtonStyled>
            </ButtonContainerStyled>
            
        </ProductModalStyled>
            
        
    );
}

export default Products;