import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { ContainerStyled, ParagraphStyled } from '../styles/Main';

const ThankYou = () => {
  const { user } = useAuth();
  return (
    <ContainerStyled>
      <ParagraphStyled>Thank you for signing up with Landlord Assist! We've sent a verification email to your inbox at {user.email}. Please verify your email before continuing.</ParagraphStyled>
    </ContainerStyled>
    
  )
}
 
export default ThankYou;