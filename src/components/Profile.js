import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ProfileContentContainerStyled, ProfileHeaderContainerStyled, ProfileTextStyled, ActionButtonStyled, GoBackButtonStyled } from '../styles/Profile';
import { ContainerStyled, ModalBackgroundStyled, PageHeaderStyled } from '../styles/Main';
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
    

    const loadCheckout = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(1);
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
        <ContainerStyled>
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
            {/* <GoBackButtonStyled onClick={() => {navigate(-1)}}>
                <FontAwesomeIconWrapper>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size={"xl"} color={'inherit'} />
                </FontAwesomeIconWrapper>
                <span style={{marginLeft:'4px'}}><strong>Go Back</strong></span>
            </GoBackButtonStyled> */}
            <ProfileContentContainerStyled>
                <ProfileHeaderContainerStyled>
                    <PageHeaderStyled>Profile</PageHeaderStyled>
                    <h4>Email: {user.email.length>35?`${user.email.slice(0,35)}..`:user.email}</h4>
                </ProfileHeaderContainerStyled>
                
                {   subscription?.status?
                    <>
                        <ProfileTextStyled>Status: <span style={{color: user.plan?.status==='active'?'green':'red'}}>{user.plan?.status.charAt(0).toUpperCase() + user.plan?.status.slice(1)}</span></ProfileTextStyled>
                        <ProfileTextStyled>Plan: ${user.plan?.plan.price.unit_amount/100} / {user.plan?.plan.plan.interval}</ProfileTextStyled>
                        <ProfileTextStyled>Member since: {user.plan?.current_period_start_date}</ProfileTextStyled>
                        <ProfileTextStyled>Renewal date: {user.plan?.current_period_end_date}</ProfileTextStyled>
                    </>:
                    subscription===null?
                    <div>Loading...</div>:
                    <div>
                        <p>Please pay for an account before talking to the assistant</p>
                        <ActionButtonStyled onClick={() => loadCheckout()}>Pay Now</ActionButtonStyled>
                    </div>
                    
                }
            </ProfileContentContainerStyled>
            <ActionButtonStyled onClick={() => manageSubscription(customer)}>Manage Account</ActionButtonStyled>
            <ActionButtonStyled onClick={() => logOut()}>Signout</ActionButtonStyled>
        </ContainerStyled>
    )
}
 
export default Profile;