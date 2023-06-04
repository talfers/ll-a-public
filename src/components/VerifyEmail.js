import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { ContainerStyled, ParagraphStyled } from '../styles/Main';
import { NavLink } from 'react-router-dom';

const VerifyEmail = () => {
  const { user } = useAuth();
  return (
    <ContainerStyled>
      <ParagraphStyled>You must verify your email at {user.email} before using Landlord Assist.</ParagraphStyled>
      <p style={{marginTop: '16px'}}><NavLink style={{color: 'white'}} to="/signin">Back to Sign in</NavLink></p>
    </ContainerStyled>
  )
}
 
export default VerifyEmail;