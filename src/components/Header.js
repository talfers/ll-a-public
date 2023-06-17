import React from 'react';
import logo from '../imgs/logo-simple.png';
import UserIcon from './UserIcon';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';
import { HeaderContainerStyled, LogoContainerStyled, LogoStyled } from '../styles/Margin';

function Header(props) {
    const { user, logOut } = useAuth();
    
    return (
        <HeaderContainerStyled className='margin-container'>
            <LogoStyled src={logo} alt='logo'/>
            {/* {user?user.emailVerified?<UserIcon user={user} logOut={logOut}/>:null:null} */}
            {/* <ThemeToggle $mobile={false} onClick={props.handleThemeChange} /> */}
        </HeaderContainerStyled>
    );
}

export default Header