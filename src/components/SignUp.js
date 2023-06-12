import React, { useState } from 'react';
// import plans from '../data/plans'
// import { usePlans } from '../hooks/usePlans';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
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
    // PlansButton,
    // PlanViewContainerStyled,
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button';
import { NavLinkWrapper } from '../styles/Main';
// import Products from './Products';


const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, signInWithGoogle, verificationEmail } = useAuth();
    // const { plans, showPlans, setShowPlans, selectedPlan, setSelectedPlan } = usePlans()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
    // const [showPlans, setShowPlans] = useState(plans.length===0?0:1);
    // const [selectedPlan, setSelectedPlan] = useState(plans.length===0?'':plans[0].prices.priceId);

    


    const onSubmit = async (e) => {
        e.preventDefault()
        if (isCaptchaSuccessful) {
            setError('')
            try {
                await signUp(email, password);
                navigate("/thankyou");
                await verificationEmail();
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage);
            }
        } else {
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
        {/* {
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
        }  */}
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
                    {/* <PlanViewContainerStyled>
                        Selected Plan: {plans.filter(p => p.prices.priceId === selectedPlan)[0].name}
                        {'  '}${plans.filter(p => p.prices.priceId === selectedPlan)[0].prices.priceData.unit_amount/100}
                        <PlansButton onClick={() => setShowPlans(1)}>Show plans</PlansButton>
                    </PlanViewContainerStyled> */}
                    
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