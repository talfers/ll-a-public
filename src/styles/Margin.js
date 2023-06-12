import styled from 'styled-components';
import { devices } from "../data/constants";
import { contrastText } from './';

export const MarginContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${contrastText};
`;

export const LogoStyled = styled.img`
    width: 200px;
`;

export const MarginTextStyled = styled.p`
    margin: 40px;
    @media only screen and ${devices.md} {
        display: none;
    }
`;

export const UserIconContainerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 99;
    display: flex;
`;

export const UserContent = styled.span`
    font-size: 14px;
    margin: 0px 6px;
    display: flex;
    z-index: 99;
    cursor: ${(props) => props.$disabled?'':'pointer'};
    pointer-events: ${(props) => props.$disabled?'none':''};
    @media only screen and ${devices.md} {
        z-index: 99;
    }
`;

export const UsernameText = styled.span`
    
    @media only screen and ${devices.md} {
        display: none;
    }
`;