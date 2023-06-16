import React from 'react';
import { 
    ProductsContainerStyled, 
    ProductContainerStyled, 
    IconContainerStyled, 
    CloseButton, 
    ProductModalStyled,
    ButtonContainerStyled,
    ProductHeader,
    ProductText
} from '../styles/Products';
import { ContentHeaderStyled } from '../styles/Main';
import { PrimaryButtonStyled } from '../styles/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconWrapper } from '../styles/Main';


function Products(props) {

    const createPlans = () => {
        return props.plans.map((p, i) => (
            <ProductContainerStyled key={i} selected={props.selectedPlan===p.prices.priceId} onClick={() => {props.setSelectedPlan(p.prices.priceId)}}>
                <IconContainerStyled>
                    <FontAwesomeIconWrapper>
                       <FontAwesomeIcon icon={p.icon} size={"2xl"} color={'inherit'}/>
                    </FontAwesomeIconWrapper>
                </IconContainerStyled>
                <ProductHeader>{p.name}</ProductHeader>
                <ProductText $hideMobile $spaceBelow>{p.description}</ProductText>
                <ProductText><strong>Price:</strong> ${p.prices.priceData.unit_amount/100} / month</ProductText>
                <ProductText><span><strong>Up to: </strong>{p.up_to}</span> queries / month</ProductText>
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
                <PrimaryButtonStyled onClick={props.onContinue}>
                    {props.continueText}
                </PrimaryButtonStyled>
            </ButtonContainerStyled>
            
        </ProductModalStyled>
            
        
    );
}

export default Products;