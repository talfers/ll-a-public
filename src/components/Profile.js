import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { ProfileContainerStyled, ProfileContentContainerStyled, ProfileHeaderContainerStyled, ProfileHeaderStyled, ProfileTextStyled, ActionButtonStyled, GoBackButtonStyled } from '../styles/Profile';
import { FontAwesomeIconWrapper } from '../styles/Main';
import { useNavigate } from 'react-router-dom'


const Profile = () => { 
    const navigate = useNavigate();
    const { user, logOut, manageSubscription } = useAuth();
    console.log(user);
    
    return (
        <ProfileContainerStyled>
            
            <GoBackButtonStyled onClick={() => {navigate(-1)}}>
                <FontAwesomeIconWrapper $theme={'light'}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size={"xl"} color={'inherit'} />
                </FontAwesomeIconWrapper>
                <span style={{marginLeft:'4px'}}>Go Back</span>
            </GoBackButtonStyled>
            <ProfileContentContainerStyled>
                <ProfileHeaderContainerStyled>
                    <FontAwesomeIconWrapper $theme={'light'}>
                        <FontAwesomeIcon icon={faUser} size={"xl"} color={'inherit'} />
                    </FontAwesomeIconWrapper>
                    <ProfileHeaderStyled>{user.email}</ProfileHeaderStyled>
                </ProfileHeaderContainerStyled>
                
                {   user.plan?
                    <>
                        <ProfileTextStyled>Status: <span style={{color: user.plan?.status==='active'?'green':'red'}}>{user.plan?.status.charAt(0).toUpperCase() + user.plan?.status.slice(1)}</span></ProfileTextStyled>
                        <ProfileTextStyled>Plan: ${user.plan?.plan.price.unit_amount/100} / {user.plan?.plan.plan.interval}</ProfileTextStyled>
                        <ProfileTextStyled>Member since: {user.plan?.current_period_start_date}</ProfileTextStyled>
                        <ProfileTextStyled>Renewal date: {user.plan?.current_period_end_date}</ProfileTextStyled>
                    </>:
                    <div>loading...</div>
                    
                }
            </ProfileContentContainerStyled>
            <ActionButtonStyled onClick={() => manageSubscription()}>Manage Account</ActionButtonStyled>
            <ActionButtonStyled onClick={() => logOut()}>Signout</ActionButtonStyled>
        </ProfileContainerStyled>
    )
}
 
export default Profile;