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
} from '../styles/Form';
import { PrimaryButtonStyled } from '../styles/Button';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const { sendResetPasswordEmail } = useAuth();
    
    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await sendResetPasswordEmail(email)
            navigate("/resetsent")
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
                    {error!==''?<p>{error}</p>:null}
                                                       
                    <FormNavContainerStyled>
                        <PrimaryButtonStyled
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Send Email                                
                        </PrimaryButtonStyled>
                    </FormNavContainerStyled>                                         
                </form>
                
                <p>
                    Didn't mean to be here?{' '}
                    <NavLink style={{color: 'white'}} to="/signin" >
                        Sign in
                    </NavLink>
                </p>                   
            </FormContainerStyled>
        </FormSectionStyled>
    </main>
  )
}
 
export default ResetPassword