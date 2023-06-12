import React, { useState, useEffect } from 'react';
import plans from '../data/plans'
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Recaptcha from './Recaptcha';
import { 
    FormSectionStyled, 
    FormNavContainerStyled, 
    FormContainerStyled, 
    InputContainerStyled, 
    InputStyled, 
    LabelStyled, 
    GoogleButtonStyled, 
    GoogleButtonContainerStyled,
    OrContainerStyled,
    HrStyled,
    PlansButton,
    PlanViewContainerStyled,
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button';
import { ModalBackgroundStyled, NavLinkWrapper } from '../styles/Main';
import Products from './Products';


const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, signInWithGoogle, verificationEmail } = useAuth();
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
        await checkout(priceId, userId)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (isCaptchaSuccessful) {
            setError('')
            setLoading(1)
            try {
                let { user } = await signUp(email, password);
                console.log(user);
                await verificationEmail();
                await loadCheckout(selectedPlan, user.uid)
                setLoading(0)
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

    const onSubmitWithGoogle = async () => {
        setError('')
        try {
            await signInWithGoogle()
            navigate("/thankyou");
            await verificationEmail()
            
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage);
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
                    <OrContainerStyled><HrStyled/><p>OR</p><HrStyled/></OrContainerStyled>
                    <GoogleButtonContainerStyled>
                        <GoogleButtonStyled onClick={onSubmitWithGoogle}>Continue with Google</GoogleButtonStyled>
                    </GoogleButtonContainerStyled>                                     
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