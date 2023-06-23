import styled, { keyframes } from 'styled-components';
import { devices } from "../data/constants";
import * as theme from "./Theme";


const slideIn = keyframes`   
    0% {
        transform: translateX(-2%);
        -webkit-transform: translateX(-2%);
        -ms-transform: translateX(-2%);
        -moz-transform: translateX(-2%);
    }
    100% {
        transform: translateX(0);
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        -moz-transform: translateX(0);
    }
`;

const appear = keyframes`   
    0% {
        opacity: 0;
        -webkit-opacity: 0;
        -ms-opacity: 0;
        -moz-opacity: 0;
    }
    100% {
        opacity: 1;
        -webkit-opacity: 1;
        -ms-opacity: 1;
        -moz-opacity: 1;
    }
`;


//  HAMBURGER MENU
export const MenuBarContainerStyled = styled.div`
    position: fixed;
    height: 80px;
    top: 0;
    right: 0;
    z-index: 98;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.bg};
    // border: solid 1px ${({ theme }) => theme.colors.borderColor};
    width: 100%;
    color: ${({ theme }) => theme.colors.contrastText};
    font-family: ${({ theme }) => theme.colors.ff};
    
    @media only screen and ${devices.md} {
        display: flex;
    }
`;

export const MenuContainerStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: ${(props) => props.$open?"100%":"0%"};
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bg};
    z-index: 90;
    opacity: 1;
    color: #fafafa;
    transition: height 0.3s ease;
    -webkit-transition: height 0.3s ease;
    -ms-transition: height 0.3s ease;
    -moz-transition: height 0.3s ease;
`;


export const MenuButtonContainerStyled = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    margin: 20px;
    z-index: 98;
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
    border-radius: 100%;
`;

export const MenuButtonLineStyled = styled.div`
    height: 2px;
    width: 16px;
    background: ${({ theme }) => theme.colors.contrastText};
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
`;

export const MenuButtonLineTopStyled = styled(MenuButtonLineStyled)`
    transform: ${(props) => props.$open?'translate(4px, 0px) rotate(45deg)':"none"};
    -webkit-transform: ${(props) => props.$open?'translate(4px, 0px) rotate(45deg)':"none"};
    -ms-transform: ${(props) => props.$open?'translate(4px, 0px) rotate(45deg)':"none"};
    -moz-transform: ${(props) => props.$open?'translate(4px, 0px) rotate(45deg)':"none"};
    transform-origin: top left;
    margin-bottom: 3px;
`;

export const MenuButtonLineMiddleStyled = styled(MenuButtonLineStyled)`
    opacity: ${(props) => props.$open?0:1};
    transform: ${(props) => props.$open?'translateX(16px)':"none"};
    -webkit-transform: ${(props) => props.$open?'translateX(16px)':"none"};
    -ms-transform: ${(props) => props.$open?'translateX(16px)':"none"};
    -moz-transform: ${(props) => props.$open?'translateX(16px)':"none"};
`;

export const MenuButtonLineBottomStyled = styled(MenuButtonLineStyled)`
    transform: ${(props) => props.$open?'translate(2px, 1px) rotate(-45deg)':"none"};
    -webkit-transform: ${(props) => props.$open?'translate(2px, 1px) rotate(-45deg)':"none"};
    -ms-transform: ${(props) => props.$open?'translate(2px, 1px) rotate(-45deg)':"none"};
    -moz-transform: ${(props) => props.$open?'translate(2px, 1px) rotate(-45deg)':"none"};
    transform-origin: top left;
    margin-top: 3px;
`;


export const MenuItemContainerStyled = styled.div`
    opacity: 0;
    z-index: 98;
    font-family: ${theme.dark.colors.contrastText};
    animation: 1s ${appear} forwards;
    -webkit-animation: 1s ${appear} forwards;
    -ms-animation: 1s ${appear} forwards;
    -moz-animation: 1s ${appear} forwards;
`;

export const MenuListStyled = styled.div`
    margin-top: 80px;
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 0px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const MenuTitleStyled = styled.h2`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.subTextColor};
    margin-top: 24px;
    text-transform: uppercase;
`;

export const MenuItemStyled = styled.div`
    font-family: ${({ theme }) => theme.colors.ff};
    font-size: 14px;
    padding: 6px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.2s ease-in-out;
    -webkit-transition: background 0.2s ease-in-out;
    -ms-transition: background 0.2s ease-in-out;
    -moz-transition: background 0.2s ease-in-out;
    animation: 0.5s ${slideIn} forwards;
    -webkit-animation: 0.5s ${slideIn} forwards;
    -ms-animation: 0.5s ${slideIn} forwards;
    -moz-animation: 0.5s ${slideIn} forwards;
    &:hover {
        background: ${({ theme }) => theme.colors.opacityColor};
    }
`;

export const MenuItemNameStyled = styled.span`
    margin-left: 16px;
`;


export const MenuItemIconStyled = styled.span`
    padding: 4px 0px;
    font-size: 21px;
    display:flex;
`;

export const LogoStyled = styled.img`
    height: 20px;
    padding-left: 20px;
    z-index: 99;
    cursor: pointer;
    position: fixed;
`;

export const NavFooterStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`;



export const ThemeToggleContainer = styled.div`
    height: 30px;
    width: 64px;
    position: relative;
    background: ${theme.dark.colors.cardText};
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