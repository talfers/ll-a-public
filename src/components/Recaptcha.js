import React from 'react';
import config from '../config'
import ReCAPTCHA from "react-google-recaptcha";
import {RecaptchaContainerStyled} from '../styles/Form';


const Recaptcha = (props) => {

  return (
    <RecaptchaContainerStyled>
      <ReCAPTCHA
        sitekey={config.REACT_APP_RECAPTCHA_SITE_KEY}
        onChange={props.onChange}
      />
    </RecaptchaContainerStyled>
    
  )
}
 
export default Recaptcha;