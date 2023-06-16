import React from 'react';
import logo from '../imgs/logo-500.png';
import UserIcon from './UserIcon';
import { useAuth } from '../hooks/useAuth';
import { MarginContainerStyled, LogoStyled } from '../styles/Margin';

function Header() {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <MarginContainerStyled className='margin-container'>
            <LogoStyled src={logo} alt='logo'/>
            {user?user.emailVerified?<UserIcon user={user} logOut={logOut}/>:null:null}
        </MarginContainerStyled>
    );
}

export default Header