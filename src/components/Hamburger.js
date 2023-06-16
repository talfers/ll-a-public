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
    MenuContainerStyled
 } from '../styles/Nav'

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
                    {props.tabs.map((item, i) => (
                        <div key={i}>
                            <MenuItemStyled 
                            key={i} 
                            onClick={()=>{ handleLinkClick(item) }}
                            className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''}`}
                            >
                                {item.name}
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