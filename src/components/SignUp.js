import React, {useState} from 'react';
import { useAuth } from '../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { PrimaryButtonStyled } from '../styles/Button';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { signUp, signInWithGoogle } = useAuth();
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate("/");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage);
        }
    }

    const onSubmitWithGoogle = async () => {
        try {
            await signInWithGoogle()
            navigate("/");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage);
        }
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
                    <NavLink style={{color: 'white'}} to="/" >
                        Sign in
                    </NavLink>
                </p>                   
            </FormContainerStyled>
        </FormSectionStyled>
    </main>
  )
}
 
export default SignUp