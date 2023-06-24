import React from 'react';
import ThemeToggle from './ThemeToggle';
import { 
    MenuBarContainerStyled,
    MenuButtonContainerStyled, 
    MenuListStyled,
    MenuButtonLineTopStyled,
    MenuButtonLineBottomStyled,
    MenuButtonLineMiddleStyled,
    MenuItemStyled,
    MenuContainerStyled,
    MenuItemIconStyled,
    MenuTitleStyled,
    NavFooterStyled,
    MenuItemNameStyled
 } from '../styles/Nav'
 import iconMap from '../data/iconMap';
 import { useNavigate } from 'react-router-dom'


function Hamburger({ user, tabs, activeTabId, onNavClick, menuOpen, setMenuOpen, logOut, handleThemeChange }) {
    const navigate = useNavigate();
    const handleMenuClick = () => {
        setMenuOpen(menuOpen===1?0:1);
    }
      
    const handleLinkClick = (item) => {
        setMenuOpen(0);
        navigate("/assistant");
        onNavClick(item.id)
    }

    const handleUserClick = () => {
        setMenuOpen(0);
        navigate("/profile");

    }

    const handleLogOut = async () => {
        try {
            await logOut()
            setMenuOpen(0);
            navigate("/");
        } catch (error) {
            alert(error.message)
            console.log(error);
        }
    }

    return (
        <div>
            <MenuBarContainerStyled>
                <MenuButtonContainerStyled  $open={menuOpen} onClick={handleMenuClick}>
                    <MenuButtonLineTopStyled $open={menuOpen} />
                    <MenuButtonLineMiddleStyled $open={menuOpen} />
                    <MenuButtonLineBottomStyled $open={menuOpen} />
                </MenuButtonContainerStyled>
            </MenuBarContainerStyled>
            {
                menuOpen===1?
                <MenuContainerStyled $open={menuOpen}>
                    <MenuListStyled $open={menuOpen}>
                    <div>
                        <MenuTitleStyled>Create New</MenuTitleStyled>
                        {tabs.map((item, i) => (
                            <div key={i}>
                                
                                <MenuItemStyled 
                                key={i} 
                                onClick={()=>{ handleLinkClick(item) }}
                                className={`tabs__button ${(activeTabId === item.id) ? 'active' : ''}`}
                                >
                                    <MenuItemIconStyled>{iconMap[item.name]}</MenuItemIconStyled>
                                    <MenuItemNameStyled>{item.name}</MenuItemNameStyled>
                                </MenuItemStyled>
                            </div>
                        ))}
                    </div>
                    {user?
                    <div>  
                        <MenuTitleStyled>User Details</MenuTitleStyled>
                         
                            <MenuItemStyled onClick={()=>{ handleUserClick() }}>
                                <MenuItemIconStyled>{iconMap['User']}</MenuItemIconStyled>
                                <MenuItemNameStyled>Profile</MenuItemNameStyled>
                            </MenuItemStyled>
                        
                            <MenuItemStyled onClick={()=>{ handleLogOut() }}>
                                <MenuItemIconStyled>{iconMap['Signout']}</MenuItemIconStyled>
                                <MenuItemNameStyled>Sign out</MenuItemNameStyled>
                            </MenuItemStyled>
                    </div>
                    :null}
                    <NavFooterStyled>
                        <ThemeToggle $mobile={false} onClick={handleThemeChange} />
                    </NavFooterStyled>
                    
                    </MenuListStyled>
                    
                </MenuContainerStyled>:<></> 
            }
            
        </div>
    );
}

export default Hamburger;