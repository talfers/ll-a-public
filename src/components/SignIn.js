import React, {useState} from 'react';
import { UserAuth } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom'
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
    const { signIn, signInWithGoogle } = UserAuth();
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
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
                    
                    <p className="text-sm text-white text-center">
                        No account yet? {' '}
                        <NavLink style={{color: 'white'}} to="/signup">
                            Sign up
                        </NavLink>
                    </p>                        
                </FormContainerStyled>
            </FormSectionStyled>
        </main>
    )
}
 
export default SignIn