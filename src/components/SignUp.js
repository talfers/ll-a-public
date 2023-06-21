import React, { useState, useEffect } from 'react';
import plans from '../data/plans';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import Loading from './Loading';
import Recaptcha from './Recaptcha';
import { 
    FormSectionStyled, 
    FormNavContainerStyled, 
    FormContainerStyled, 
    InputContainerStyled, 
    InputStyled, 
    LabelStyled, 
    PlansButton,
    PlanViewContainerStyled,
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button';
import { ModalBackgroundStyled, NavLinkWrapper, PageHeaderStyled } from '../styles/Main';
import Products from './Products';


const SignUp = () => {
    const { signUp, verificationEmail } = useAuth();
    const { checkout } = usePayments();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
    const [showPlans, setShowPlans] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState(plans[0].prices.priceId);
    const [loading, setLoading] = useState(0);
    
    useEffect(() => {
        setShowPlans(1)
    }, [setShowPlans])

    const loadCheckout = async (priceId, userId) => {
        await checkout(priceId, userId, '/thankyou', '/signup' )
    }

    const onContinue = () => {
        setSelectedPlan(selectedPlan);
        setShowPlans(0)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (isCaptchaSuccessful) {
            setError('')
            setLoading(1)
            try {
                let user = await signUp(email, password);
                await verificationEmail();
                await loadCheckout(selectedPlan, user.uid)
            } catch (error) {
                setLoading(0)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage);
            }
        } else {
            setLoading(0)
            setError('Please confirm you are not a robot before continuing')
        }
    }


    const onRecaptchaChange = (value) => {
        setIsCaptchaSuccess(true)
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
                onContinue={onContinue}
                continueText={'Continue'}
                />
            </ModalBackgroundStyled>
            :
            null
        } 
        <FormSectionStyled>
            <PageHeaderStyled>Sign Up</PageHeaderStyled>
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
                    
                    <InputContainerStyled>
                        <LabelStyled htmlFor="password">
                            Password
                        </LabelStyled>
                        <InputStyled
                            type="password"
                            label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required                                 
                            placeholder="Password"   
                        />
                    </InputContainerStyled>
                    <PlanViewContainerStyled>
                        Selected Plan: {plans.filter(p => p.prices.priceId === selectedPlan)[0].name}
                        {'  '}${plans.filter(p => p.prices.priceId === selectedPlan)[0].prices.priceData.unit_amount/100}
                        <PlansButton onClick={() => setShowPlans(1)}>Show plans</PlansButton>
                    </PlanViewContainerStyled>
                    
                    <Recaptcha onChange={onRecaptchaChange}/>
                    {error!==''?<p>{error}</p>:null}
                                                       
                    <FormNavContainerStyled>
                        <PrimaryButtonStyled
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </PrimaryButtonStyled>
                    </FormNavContainerStyled>                               
                </form>
                
                <p>
                    Already have an account?{' '}
                    <NavLinkWrapper to="/signin" >
                        Sign in
                    </NavLinkWrapper>
                </p>                   
            </FormContainerStyled>
        </FormSectionStyled>
    </main>
  )
}
 
export default SignUp