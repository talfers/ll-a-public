import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RedirectRoute = ({children}) => {
    const { user } = useAuth();
    return (
        user?user.emailVerified?<Navigate to='/' />:children:children
    )
    
}

export default RedirectRoute;