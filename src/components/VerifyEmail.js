import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { ContainerStyled, ParagraphStyled } from '../styles/Main';

const VerifyEmail = () => {
  const { user } = useAuth();
  return (
    <ContainerStyled>
      <ParagraphStyled>You must verify your email at {user.email} before using Landlord Assist.</ParagraphStyled>
    </ContainerStyled>
  )
}
 
export default VerifyEmail;