import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';

const Profile = () => { 
    const { user, logOut } = useAuth();
    const { subscription, getCurrentPlan } = usePayments();
    console.log(getCurrentPlan());
    return (
        <main>
            <h2>{user.email}</h2>
            <div onClick={() => logOut()}>Logout</div>
        </main>
    )
}
 
export default Profile;