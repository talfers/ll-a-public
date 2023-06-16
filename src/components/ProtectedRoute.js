import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({children}) => {
    const { user } = useAuth();
    
    if (!user) {
        return <Navigate to='/signin' />
    } else if (user.emailVerified===false) {
        return <Navigate to='/verifyemail' />
    } 
    return children;
}

export default ProtectedRoute;