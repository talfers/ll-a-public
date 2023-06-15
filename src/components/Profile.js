import React, { useEffect, useState } from 'react';
import plans from '../data/plans';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { ProfileContainerStyled, ProfileContentContainerStyled, ProfileHeaderContainerStyled, ProfileHeaderStyled, ProfileTextStyled, ActionButtonStyled, GoBackButtonStyled } from '../styles/Profile';
import { FontAwesomeIconWrapper, ModalBackgroundStyled } from '../styles/Main';
import { useNavigate } from 'react-router-dom'
import Loading from './Loading';
import Products from './Products';
import { PlanViewContainerStyled, PlansButton } from '../styles/Form';


const Profile = () => { 
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const { getCurrentPlan, getCustomer, manageSubscription, checkout } = usePayments();
    const [subscription, setSubscription] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [showPlans, setShowPlans] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState(plans[0].prices.priceId);
    const [loading, setLoading] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const getDetails = async () => {
            let sub = await getCurrentPlan(user.uid);
            setSubscription(sub)
            let cust = await getCustomer(user.email);
            setCustomer(cust)
        }
        getDetails()
    }, [user.uid, getCurrentPlan, user.email, getCustomer])
    

    const loadCheckout = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(1)
        try {
            await checkout(selectedPlan, user.uid, '/profile', '/profile' )
        } catch (error) {
            setLoading(0)
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorCode, errorMessage);
        }
    }

    return (
        <ProfileContainerStyled>
            {
                loading?
                <Loading message={"Loading..."}/>
                :null
            }
            
            {
                showPlans===1?
                <ModalBackgroundStyled>
                    <Products
                    plans={plans} 
                    setShowPlans={setShowPlans} 
                    selectedPlan={selectedPlan} 
                    setSelectedPlan={setSelectedPlan}
                    onContinue={loadCheckout}
                    continueText={'Continue to Pay'}
                    />
                </ModalBackgroundStyled>
                :
                null
            } 
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
                        <ActionButtonStyled onClick={() => manageSubscription(customer)}>Manage Account</ActionButtonStyled>
                    </>:
                    subscription===null?
                    <div>loading...</div>:
                    <div>
                        <p>Please pay for an account before talking to the assistant</p>
                        {error!==''?<p>{error}</p>:null}
                        <PlanViewContainerStyled>
                            Selected Plan: {plans.filter(p => p.prices.priceId === selectedPlan)[0].name}
                            {'  '}${plans.filter(p => p.prices.priceId === selectedPlan)[0].prices.priceData.unit_amount/100}
                            <PlansButton onClick={() => setShowPlans(1)}>Show plans</PlansButton>
                        </PlanViewContainerStyled>
                    </div>
                    
                }
            </ProfileContentContainerStyled>
            <ActionButtonStyled onClick={() => logOut()}>Signout</ActionButtonStyled>
        </ProfileContainerStyled>
    )
}
 
export default Profile;