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
    z-index: 80;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: transparent;
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
    z-index: 95;
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
    transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -webkit-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -ms-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -moz-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
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
    z-index: 95;
    font-family: ${theme.dark.colors.contrastText};
    animation: 1s ${appear} forwards;
    -webkit-animation: 1s ${appear} forwards;
    -ms-animation: 1s ${appear} forwards;
    -moz-animation: 1s ${appear} forwards;
`;

export const MenuListStyled = styled.div`
    padding-top: 40px;
`;

export const MenuBorderStyled = styled.div`
    height: 1px;
    background:  ${({ theme }) => theme.colors.borderColor};
    widhth: 100%;
    margin-top: 40px;
`;

export const MenuTitleStyled = styled.h2`
    margin-left: 20px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.subTextColor};
    margin-top: 24px;
`;

export const MenuItemStyled = styled.div`
    font-family: ${({ theme }) => theme.colors.ff};
    font-size: 14px;
    padding: 6px 0;
    margin: 0 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    color: ${({ theme }) => theme.colors.contrastText};
    transition: all 0.2s ease-in-out, border-bottom .1s ease-out;
    -webkit-transition: color 0.2s ease-in-out, border-bottom .1s ease-out;
    -ms-transition: color 0.2s ease-in-out, border-bottom .1s ease-out;
    -moz-transition: color 0.2s ease-in-out, border-bottom .1s ease-out;
    animation: 0.5s ${slideIn} forwards;
    -webkit-animation: 0.5s ${slideIn} forwards;
    -ms-animation: 0.5s ${slideIn} forwards;
    -moz-animation: 0.5s ${slideIn} forwards;
    &:hover {
        color: ${({ theme }) => theme.colors.subTextColor};
        border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
    }
`;

export const MenuItemIconStyled = styled.span`
    margin-right: 16px;
    margin-top: 8px;
    font-size: 21px;
`;

export const MenuItemLineStyled = styled.div`
    
`;


//  NAV MENU
export const NavContainerStyled = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 10px 0 30px;
    @media only screen and ${devices.md} {
        display: none;
    }
`;

export const NavItemStyled = styled.li`
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

export const NavLinkStyled = styled.button`
    background: rgba(0, 0, 0, 0);
    padding: 4px;
    color: ${({ theme }) => theme.colors.headline};
    box-shadow: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: block;
    position: relative;
    font-family: inherit;
    font-weight: 400;

    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.activeColor};
        opacity: 0;
        visibility: hidden;
        transition: visibility 0s, opacity 0.4s ease-in-out;
        -webkit-transition: visibility 0s, opacity 0.4s ease-in-out;
        -ms-transition: visibility 0s, opacity 0.4s ease-in-out;
        -moz-transition: visibility 0s, opacity 0.4s ease-in-out;
    }
    .active::after {
        opacity: 1;
        visibility: visible;
        transition: visibility 0s, opacity 0.4s ease-in-out;
        -webkit-transition: visibility 0s, opacity 0.4s ease-in-out;
        -ms-transition: visibility 0s, opacity 0.4s ease-in-out;
        -moz-transition: visibility 0s, opacity 0.4s ease-in-out;
    }
`;