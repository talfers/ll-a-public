import styled from 'styled-components';
import { devices } from "../data/constants";
import * as theme from "./Theme";


export const MarginContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.contrastText};
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


export const ThemeToggleContainer = styled.div`
    height: 30px;
    width: 64px;
    background: ${theme.dark.colors.cardText};
    position: absolute;
    left: 20px;
    top: 20px;
    border-radius: 30px;
    cursor: pointer;
    @media only screen and ${devices.md} {
        display: ${(props) => props.$mobile?'block':'none'};
        
    }
`;

export const ThemeToggleBall = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    background: ${theme.dark.colors.cardBG};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({ theme }) => theme.colors.themeToggleTranslate};
    transition: all 0.5s ease;
`;

export const ThemeIcons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ThemeImage = styled.i`
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.themeToggleContrast};
`;
