import React from 'react';
import { NavContainerStyled, NavLinkStyled, NavItemStyled } from '../styles/Nav'

function Navigation(props) {

    return (
        <NavContainerStyled>
            {props.tabs.map((item) => (
                <NavItemStyled key={item.id} >
                    <NavLinkStyled className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''}`}
                            onClick={() => props.onNavClick(item.id)}>
                        {item.name}
                    </NavLinkStyled>
                </NavItemStyled>
            ))}
        </NavContainerStyled>
    );
}

export default Navigation