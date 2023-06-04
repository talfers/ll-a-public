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
    HrStyled
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button'


const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useAuth();
    const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        if (isCaptchaSuccessful) {
            setError('')
            try {
                await signIn(email, password)
                navigate("/");
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode, errorMessage);
            }
        } else {
            setError('Please confirm you are not a robot before continuing');
        }
        
       
    }

    const onSubmitWithGoogle = async () => {
        if (isCaptchaSuccessful) {
            setError('')
            try {
                await signInWithGoogle()
                navigate("/");
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
 
    return(
        <main>        
            <FormSectionStyled>
                <FormContainerStyled>                                
                    <form>                                              
                        <InputContainerStyled>
                            <LabelStyled htmlFor="email-address">
                                Email address
                            </LabelStyled>
                            <InputStyled
                                id="email-address"
                                name="email"
                                type="email"                                    
                                required                                                                                
                                placeholder="Email address"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </InputContainerStyled>

                        <InputContainerStyled >
                            <LabelStyled htmlFor="password">
                                Password
                            </LabelStyled>
                            <InputStyled
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </InputContainerStyled>
                        <Recaptcha onChange={onRecaptchaChange}/>
                        {error!==''?<p>{error}</p>:null}
                        
                        <FormNavContainerStyled>
                            <PrimaryButtonStyled                                    
                                onClick={onSubmit}                                        
                            >      
                                Sign in                                                                  
                            </PrimaryButtonStyled>

                        </FormNavContainerStyled>
                        <OrContainerStyled><HrStyled/><p>OR</p><HrStyled/></OrContainerStyled>
                        <GoogleButtonContainerStyled>
                            <GoogleButtonStyled onClick={onSubmitWithGoogle}>Continue with Google</GoogleButtonStyled>
                        </GoogleButtonContainerStyled>
                                                
                    </form>
                    
                    <p>
                        No account yet? {' '}
                        <NavLink style={{color: 'white'}} to="/signup">
                            Sign up
                        </NavLink>
                    </p>
                    <p>
                        Need password reset? {' '}
                        <NavLink style={{color: 'white'}} to="/reset">
                            Reset Password
                        </NavLink>
                    </p>                        
                </FormContainerStyled>
            </FormSectionStyled>
        </main>
    )
}
 
export default SignIn