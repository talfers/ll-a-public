import React from 'react';
import { FontAwesomeIconWrapper } from '../styles/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UserIconContainerStyled, UserContent, UsernameText } from '../styles/Margin';
import { useNavigate } from 'react-router-dom'

function UserIcon(props) {
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            await props.logOut()
            navigate("/");
        } catch (error) {
            alert(error.message)
            console.log(error);
        }
    }
    return (
        <UserIconContainerStyled>
            <UserContent onClick={() => navigate("/profile")}>
                <FontAwesomeIconWrapper $theme={'light'}>
                    <FontAwesomeIcon icon={faUser} size={"sm"} color={'inherit'} />
                </FontAwesomeIconWrapper>
                <UsernameText style={{marginLeft: '6px'}}>{props.user?props.user.email:'none'}</UsernameText>
            </UserContent>
            <UserContent onClick={handleLogOut}>Signout</UserContent>
        </UserIconContainerStyled>
    );
}
