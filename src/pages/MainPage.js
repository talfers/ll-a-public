import { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Profile from '../components/Profile';
import ThankYou from '../components/ThankYou';
import VerifyEmail from '../components/VerifyEmail';
import ResetPassword from '../components/ResetPassword';
import ResetPasswordMessage from '../components/ResetPasswordMessage';
import Tabs from '../components/Tabs';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import RedirectRoute from '../components/RedirectRoute';
import { Context as TaskContext } from '../context/TaskContext';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import { useTabs } from '../hooks/useTabs';


function MainPage({handleThemeChange}) {
    const { user, logOut } = useAuth();
    const {state} = useContext(TaskContext)
    const [ activeTabId, activeTab, setActiveTab] = useTabs(state.tabs)
    const { getCurrentPlan, getCustomer } = usePayments();
    const [subscription, setSubscription] = useState(null);
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        if(user?.uid){
            const getDetails = async () => {
                let sub = await getCurrentPlan(user?.uid);
                setSubscription(sub)
                let cust = await getCustomer(user?.email);
                setCustomer(cust)
            }
            getDetails()
        } else {
            return
        }
        
    }, [user?.uid, getCurrentPlan, user?.email, getCustomer])
  
    return (
        <div>
            <Header 
                user={user}
                tabs={state.tabs} 
                setActiveTab={setActiveTab} 
                activeTabId={activeTabId} 
                logOut={logOut} 
                handleThemeChange={handleThemeChange} 
            />
            <Routes>
                <Route path="/signin" element={<RedirectRoute><SignIn/></RedirectRoute>} />
                <Route path="/signup" element={<RedirectRoute><SignUp/></RedirectRoute>} />
                <Route path="/reset" element={<ResetPassword/>} />
                <Route path="/resetsent" element={<ResetPasswordMessage/>} />
                <Route path="/thankyou" element={<RedirectRoute><ThankYou/></RedirectRoute>}/>
                <Route path="/verifyemail" element={<RedirectRoute><VerifyEmail/></RedirectRoute>}/>
                <Route path="/" element={<ProtectedRoute> <Home user={user} tabs={state.tabs} setActiveTab={setActiveTab}/></ProtectedRoute>} />
                <Route path="/assistant" element={<ProtectedRoute><Tabs activeTab={activeTab} customer={customer} subscription={subscription}/></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
            </Routes>
            <Footer/>
        </div>
    )   
}

export default MainPage;