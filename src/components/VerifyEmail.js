import React from 'react';
import { useSnack } from '../hooks/useSnack';
import { useAuth } from '../hooks/useAuth';
import { ContainerStyled, NavLinkWrapper, ParagraphStyled } from '../styles/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { CopySnack } from '../styles/Main'

const VerifyEmail = () => {
  const { user, verificationEmail } = useAuth();
  const [snack, showSnack] = useSnack();

  const resendEmail = async () => {
    try {
      await verificationEmail()
      showSnack('Email resent!')
    } catch (err) {
      showSnack(err.message)
    }
  }

  return (
    <ContainerStyled>
      <ParagraphStyled>You must verify your email at {user.email} before using Landlord Assist.</ParagraphStyled>
      <p style={{margin: '16px 0px 16px 0px'}}><NavLinkWrapper to="/signin">Back to Sign in</NavLinkWrapper></p>
      {snack!==''?<CopySnack $size={148}><FontAwesomeIcon icon={faCheck} size={"lg"} color={'green'}/>{snack}</CopySnack>:<></>}
      <div style={{color: 'white'}}><p>Didn't receive the email?   <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={resendEmail}>Resend</span></p></div>
    </ContainerStyled>
  )
}
 
export default VerifyEmail;