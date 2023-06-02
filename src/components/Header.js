import React from 'react';
import logo from '../imgs/logo-500.png';
import UserIcon from './UserIcon';
import { UserAuth } from '../context/AuthContext';
import { MarginContainerStyled, LogoStyled } from '../styles/Margin';

function Header() {
    const { user, logOut } = UserAuth();
    
    return (
        <MarginContainerStyled className='margin-container'>
            <LogoStyled src={logo} alt='logo'/>
            {user?<UserIcon user={user} logOut={logOut}/>:null}
            
        </MarginContainerStyled>
    );
}

export default Header