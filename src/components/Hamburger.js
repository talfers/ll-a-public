import React, { useState } from 'react';
import { 
    MenuBarContainerStyled,
    MenuButtonContainerStyled, 
    MenuListStyled,
    MenuButtonLineTopStyled,
    MenuButtonLineBottomStyled,
    MenuButtonLineMiddleStyled,
    MenuItemStyled,
    MenuItemLineStyled,
    MenuContainerStyled,
    MenuItemIconStyled,
    MenuTitleStyled,
    MenuBorderStyled
 } from '../styles/Nav'
 import iconMap from '../data/iconMap';

function Hamburger(props) {
    let [menuOpen, setMenuOpen] = useState(0)

    const handleMenuClick = () => {
        setMenuOpen(menuOpen===1?0:1);
    }
      
    const handleLinkClick = (item) => {
        setMenuOpen(0);
        props.onNavClick(item.id)
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
                    {props.tabs.map((item, i) => (
                        <div key={i}>
                            
                            <MenuItemStyled 
                            key={i} 
                            onClick={()=>{ handleLinkClick(item) }}
                            className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''}`}
                            >
                                <MenuItemIconStyled>{iconMap[item.shortName]}</MenuItemIconStyled>
                                <span>{item.name}</span>
                            </MenuItemStyled>
                            <MenuItemLineStyled $active={props.activeTabId === item.id} />
                        </div>
                    ))}
                    </MenuListStyled>
                </MenuContainerStyled>:<></> 
            }
            
        </div>
    );
}

export default Hamburger;