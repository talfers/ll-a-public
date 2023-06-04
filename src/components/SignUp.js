import React, {useState} from 'react';
import { useAuth } from '../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
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
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { signUp, signInWithGoogle, verificationEmail } = useAuth();
    const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if (isCaptchaSuccessful) {
            setError('')
            try {
                await signUp(email, password)
                navigate("/thankyou");
                await verificationEmail()
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
        if (isCaptchaSuccessful) {
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
        } else {
            setError('Please confirm you are not a robot before continuing')
        }
        
    }

    const onRecaptchaChange = (value) => {
        setIsCaptchaSuccess(true)
    }

 
  return (
    <main>        
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
                    <NavLink style={{color: 'white'}} to="/signin" >
                        Sign in
                    </NavLink>
                </p>                   
            </FormContainerStyled>
        </FormSectionStyled>
    </main>
  )
}
 
export default SignUp