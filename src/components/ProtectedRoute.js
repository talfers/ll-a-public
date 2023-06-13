import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';

const ProtectedRoute = ({children}) => {
    const [subscription, setSubscription] = useState(null)
    const { user } = useAuth();
    const { getCurrentPlan } = usePayments();
    
    useEffect(() => {
        const getDetails = async () => {
            let sub = await getCurrentPlan(user?.uid);
            setSubscription(sub)
        }
        getDetails()
        
    }, [user.uid, getCurrentPlan])

    if (!user) {
        return <Navigate to='/signin' />
    } else if (user.emailVerified===false) {
        return <Navigate to='/verifyemail' />
    } else if (!subscription) {
        return <Navigate to='/pay' />
    }
    return children;
}

export default ProtectedRoute;