import React from 'react';
import { ContainerStyled, ParagraphStyled } from '../styles/Main';
import { NavLink } from 'react-router-dom';

const ResetPasswordMessage = () => {
  return (
    <ContainerStyled>
      <ParagraphStyled>Password reset email has been sent; Check your Inbox!</ParagraphStyled>
      <p style={{marginTop: '16px'}}><NavLink style={{color: 'white'}} to="/signin">Back to Sign in</NavLink></p>
    </ContainerStyled>
    
  )
}
 
export default ResetPasswordMessage;