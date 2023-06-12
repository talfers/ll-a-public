import React from 'react';
import { ContainerStyled, ParagraphStyled } from '../styles/Main';
import { NavLinkWrapper } from '../styles/Main';

const ResetPasswordMessage = () => {
  return (
    <ContainerStyled>
      <ParagraphStyled>Password reset email has been sent; Check your Inbox!</ParagraphStyled>
      <p style={{marginTop: '16px'}}><NavLinkWrapper to="/signin">Back to Sign in</NavLinkWrapper></p>
    </ContainerStyled>
    
  )
}
 
export default ResetPasswordMessage;