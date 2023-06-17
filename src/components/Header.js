import React, { useState } from 'react';
import logo from '../imgs/logo-simple.png';
import Hamburger from './Hamburger';
import { HeaderContainerStyled } from '../styles/Margin';
import { LogoStyled } from '../styles/Nav';
import { useNavigate } from 'react-router-dom'

function Header({ user, tabs, setActiveTab, activeTabId, logOut }) {
    let [menuOpen, setMenuOpen] = useState(0);
    const navigate = useNavigate();
    
    const handleHomeClick = () => {
        setMenuOpen(0);
        navigate('/')
    }
    
    return (
        <HeaderContainerStyled>
            <LogoStyled onClick={handleHomeClick} src={logo} alt='logo'/>
            <Hamburger 
                user={user}
                tabs={tabs} 
                onNavClick={setActiveTab}
                activeTabId={activeTabId}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </HeaderContainerStyled>
    );
}

export default Header