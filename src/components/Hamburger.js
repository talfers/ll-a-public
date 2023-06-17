import React from 'react';
// import UserIcon from './UserIcon';
// import ThemeToggle from './ThemeToggle';
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
    MenuBorderStyled
 } from '../styles/Nav'
 import iconMap from '../data/iconMap';


function Hamburger({ user, tabs, activeTabId, onNavClick, menuOpen, setMenuOpen }) {
    
    const handleMenuClick = () => {
        setMenuOpen(menuOpen===1?0:1);
    }
      
    const handleLinkClick = (item) => {
        setMenuOpen(0);
        onNavClick(item.id)
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
                    <MenuBorderStyled/>
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
                    </MenuListStyled>
                    {/* {user?user.emailVerified?<UserIcon user={user} logOut={logOut}/>:null:null} */}
                    {/* <ThemeToggle $mobile={false} onClick={props.handleThemeChange} /> */}
                </MenuContainerStyled>:<></> 
            }
            
        </div>
    );
}

export default Hamburger;