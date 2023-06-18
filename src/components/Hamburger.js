import React from 'react';
import UserIcon from './UserIcon';
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
    NavFooterStyled
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
                        <MenuTitleStyled>CREATE NEW</MenuTitleStyled>
                        {tabs.map((item, i) => (
                            <div key={i}>
                                
                                <MenuItemStyled 
                                key={i} 
                                onClick={()=>{ handleLinkClick(item) }}
                                className={`tabs__button ${(activeTabId === item.id) ? 'active' : ''}`}
                                >
                                    <MenuItemIconStyled>{iconMap[item.shortName]}</MenuItemIconStyled>
                                    <span>{item.name}</span>
                                </MenuItemStyled>
                            </div>
                        ))}
                    </div>
                    <NavFooterStyled>
                        {user?<UserIcon user={user} handleUserClick={handleUserClick} handleLogOut={handleLogOut}/>:null}
                        <ThemeToggle $mobile={false} onClick={handleThemeChange} />
                    </NavFooterStyled>
                    
                    </MenuListStyled>
                    
                </MenuContainerStyled>:<></> 
            }
            
        </div>
    );
}

export default Hamburger;