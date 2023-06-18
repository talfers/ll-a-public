import React from 'react';
import { FontAwesomeIconWrapper } from '../styles/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserIconContainerStyled, UserContent } from '../styles/Nav';


function UserIcon({handleUserClick, handleLogOut}) {
    
    return (
        <UserIconContainerStyled>
            <UserContent onClick={handleUserClick}>
                <FontAwesomeIconWrapper>
                    <FontAwesomeIcon icon={faUser} size={"sm"} color={'inherit'} />
                </FontAwesomeIconWrapper>
            </UserContent>
            <UserContent onClick={handleLogOut}>Signout</UserContent>
        </UserIconContainerStyled>
    );
}

export default UserIcon