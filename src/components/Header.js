import React, { useState } from 'react';
import logo from '../imgs/logo-full-dark.png';
import Hamburger from './Hamburger';
import { HeaderContainerStyled } from '../styles/Margin';
import { LogoStyled } from '../styles/Nav';
import { useNavigate } from 'react-router-dom'

function Header({ user, tabs, setActiveTab, activeTabId, logOut, handleThemeChange }) {
    let [menuOpen, setMenuOpen] = useState(0);
    const navigate = useNavigate();
    
    const handleHomeClick = () => {
        setMenuOpen(0);
        navigate('/')
    }
    
    return (
        <HeaderContainerStyled>
            <LogoStyled onClick={handleHomeClick} src={logo} alt='logo'/>
            {user?
                <Hamburger 
                    user={user}
                    logOut={logOut}
                    tabs={tabs} 
                    onNavClick={setActiveTab}
                    activeTabId={activeTabId}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    handleThemeChange={handleThemeChange}
                />
                :null}
        </HeaderContainerStyled>
    );
}

export default Header