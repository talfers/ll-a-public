import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { ProfileContainerStyled, ProfileContentContainerStyled, ProfileHeaderContainerStyled, ProfileHeaderStyled, ProfileTextStyled, ActionButtonStyled, GoBackButtonStyled } from '../styles/Profile';
import { FontAwesomeIconWrapper } from '../styles/Main';
import { useNavigate } from 'react-router-dom'


const Profile = () => { 
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const { getCurrentPlan, getCustomer, manageSubscription } = usePayments();
    const [subscription, setSubscription] = useState(null);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            let sub = await getCurrentPlan(user.uid);
            setSubscription(sub)
            let cust = await getCustomer(user.email);
            setCustomer(cust)
        }
        getDetails()
    }, [user.uid, getCurrentPlan, user.email, getCustomer])
    
    const loadCheckout = async (priceId, userId) => {
        alert('Feature under construction')
    }

    return (
        <ProfileContainerStyled>
            
            <GoBackButtonStyled onClick={() => {navigate(-1)}}>
                <FontAwesomeIconWrapper $theme={'light'}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size={"xl"} color={'inherit'} />
                </FontAwesomeIconWrapper>
                <span style={{marginLeft:'4px'}}><strong>Go Back</strong></span>
            </GoBackButtonStyled>
            <ProfileContentContainerStyled>
                <ProfileHeaderContainerStyled>
                    <FontAwesomeIconWrapper $theme={'light'}>
                        <FontAwesomeIcon icon={faUser} size={"xl"} color={'inherit'} />
                    </FontAwesomeIconWrapper>
                    <ProfileHeaderStyled>{user.email}</ProfileHeaderStyled>
                </ProfileHeaderContainerStyled>
                
                {   subscription?.status?
                    <>
                        <ProfileTextStyled>Status: <span style={{color: subscription?.status==='active'?'green':'red'}}>{subscription?.status.charAt(0).toUpperCase() + subscription?.status.slice(1)}</span></ProfileTextStyled>
                        <ProfileTextStyled>Plan: ${subscription?.plan.price.unit_amount/100} / {subscription?.plan.plan.interval}</ProfileTextStyled>
                        <ProfileTextStyled>Member since: {subscription?.current_period_start_date}</ProfileTextStyled>
                        <ProfileTextStyled>Renewal date: {subscription?.current_period_end_date}</ProfileTextStyled>
                    </>:
                    subscription===null?
                    <div>loading...</div>:
                    <div>
                        <p>Please pay for an account before talking to the assistant</p>
                        <ActionButtonStyled onClick={() => loadCheckout()}>Pay Now</ActionButtonStyled>
                    </div>
                    
                }
            </ProfileContentContainerStyled>
            <ActionButtonStyled onClick={() => manageSubscription(customer)}>Manage Account</ActionButtonStyled>
            <ActionButtonStyled onClick={() => logOut()}>Signout</ActionButtonStyled>
        </ProfileContainerStyled>
    )
}
 
export default Profile;