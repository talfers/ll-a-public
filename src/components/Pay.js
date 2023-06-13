import React, {useState, useEffect} from 'react';
import plans from '../data/plans';
import { useAuth } from '../hooks/useAuth';
import { 
    FormSectionStyled, 
    FormNavContainerStyled, 
    FormContainerStyled, 
    InputContainerStyled, 
    InputStyled, 
    LabelStyled,
    PlanViewContainerStyled,
    PlansButton, 
} from '../styles/Form';
import { ModalBackgroundStyled, NavLinkWrapper } from '../styles/Main';
import { PrimaryButtonStyled } from '../styles/Button';
import Products from './Products';
import Loading from './Loading';
import { usePayments } from '../hooks/usePayments';


const Pay = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(0)
    const [showPlans, setShowPlans] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState(plans[0].prices.priceId);
    const { user } = useAuth();
    const { checkout } = usePayments()


    useEffect(() => {
        setShowPlans(1)
    }, [setShowPlans])

    const loadCheckout = async (priceId, userId) => {
        await checkout(priceId, userId)
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        
        setError('')
        setLoading(1)
        try {            
            await loadCheckout(selectedPlan, user.uid)
            setLoading(0)
        } catch (error) {
            setLoading(0)
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage);
        }
        
    }

  return (
    <main>   
        {
            loading?
            <Loading message={"Loading..."}/>
            :null
        }
        
        {
            showPlans===1?
            <ModalBackgroundStyled>
                <Products
                plans={plans} 
                setShowPlans={setShowPlans} 
                selectedPlan={selectedPlan} 
                setSelectedPlan={setSelectedPlan} 
                />
            </ModalBackgroundStyled>
            :
            null
        }      
        <FormSectionStyled>
            <FormContainerStyled>                                                                                             
                <form>                                                                                            
                    <InputContainerStyled>
                        <LabelStyled htmlFor="email-address">
                            Email address
                        </LabelStyled>
                        <InputStyled
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                            required                                    
                            placeholder="Email address"                                
                        />
                    </InputContainerStyled>
                    <PlanViewContainerStyled>
                        Selected Plan: {plans.filter(p => p.prices.priceId === selectedPlan)[0].name}
                        {'  '}${plans.filter(p => p.prices.priceId === selectedPlan)[0].prices.priceData.unit_amount/100}
                        <PlansButton onClick={() => setShowPlans(1)}>Show plans</PlansButton>
                    </PlanViewContainerStyled>
                    {error!==''?<p>{error}</p>:null}
                                                       
                    <FormNavContainerStyled>
                        <PrimaryButtonStyled
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Buy Plan                                
                        </PrimaryButtonStyled>
                    </FormNavContainerStyled>                                         
                </form>
                
                <p>
                    Didn't mean to be here?{' '}
                    <NavLinkWrapper to="/signin" >
                        Sign in
                    </NavLinkWrapper>
                    
                    
                </p>                   
            </FormContainerStyled>
        </FormSectionStyled>
    </main>
  )
}
 
export default Pay