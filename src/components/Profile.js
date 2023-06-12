import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => { 
    const { user, logOut } = useAuth();

    return (
        <main>
            <h2>{user.email}</h2>
            <div onClick={() => logOut()}>Logout</div>
        </main>
    )
}
 
export default Profile;