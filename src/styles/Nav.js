import styled, { keyframes } from 'styled-components';
import { devices } from "../data/constants"
import { headline, activeColor, bg, cardText, ff } from './'

const shrink = keyframes`   
    0% {
        width: 95%;
        -webkit-width: 95%;
        -ms-width: 95%;
        -moz-width: 95%;
    }
    100% {
        width: 90%;
        -webkit-width: 90%;
        -ms-width: 90%;
        -moz-width: 90%;
    }
`;

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
    top: 0;
    left: 0;
    z-index: 90;
    opacity: 0.9;
    display: none;
    align-items: center;
    background: transparent;
    width: 100%;
    color: white;
    font-family: ${ff};
    @media only screen and ${devices.md} {
        display: flex;
    }
`;

export const MenuContainerStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: ${(props) => props.$open?"100%":"0%"};
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: ${bg};
    opacity: 0.95;
    color: #fafafa;
    transition: height 0.3s ease;
    -webkit-transition: height 0.3s ease;
    -ms-transition: height 0.3s ease;
    -moz-transition: height 0.3s ease;
    z-index: 2;
`;

export const MenuListStyled = styled.div`
    padding-top: 3rem;
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
    margin: 12px;
    z-index: 90;
`;

export const MenuButtonLineStyled = styled.div`
    height: 2px;
    width: 20px;
    background: ${(props) => props.$color?`${props.$color}`:""};
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
`;

export const MenuButtonLineTopStyled = styled(MenuButtonLineStyled)`
    transform: ${(props) => props.$open?'rotate(45deg)':"none"};
    -webkit-transform: ${(props) => props.$open?'rotate(45deg)':"none"};
    -ms-transform: ${(props) => props.$open?'rotate(45deg)':"none"};
    -moz-transform: ${(props) => props.$open?'rotate(45deg)':"none"};
    transform-origin: top left;
    margin-bottom: 5px;
`;

export const MenuButtonLineMiddleStyled = styled(MenuButtonLineStyled)`
    opacity: ${(props) => props.$open?0:1};
    transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -webkit-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -ms-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
    -moz-transform: ${(props) => props.$open?'translateX(-16px)':"none"};
`;

export const MenuButtonLineBottomStyled = styled(MenuButtonLineStyled)`
    transform: ${(props) => props.$open?'translateX(-1px) rotate(-45deg)':"none"};
    -webkit-transform: ${(props) => props.$open?'translateX(-1px) rotate(-45deg)':"none"};
    -ms-transform: ${(props) => props.$open?'translateX(-1px) rotate(-45deg)':"none"};
    -moz-transform: ${(props) => props.$open?'translateX(-1px) rotate(-45deg)':"none"};
    transform-origin: top left;
    margin-top: 5px;
`;


export const MenuItemContainerStyled = styled.div`
    opacity: 0;
    animation: 1s ${appear} forwards;
    -webkit-animation: 1s ${appear} forwards;
    -ms-animation: 1s ${appear} forwards;
    -moz-animation: 1s ${appear} forwards;
`;

export const MenuItemStyled = styled.div`
    font-family: ${ff};
    font-size: 1.2rem;
    padding: 1rem 0;
    margin: 0 5%;
    cursor: pointer;
    color: #fff;
    transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    animation: 0.5s ${slideIn} forwards;
    -webkit-animation: 0.5s ${slideIn} forwards;
    -ms-animation: 0.5s ${slideIn} forwards;
    -moz-animation: 0.5s ${slideIn} forwards;

    &:hover {
        color: gray;
    }
`;

export const MenuItemLineStyled = styled.div`
    width: 90%;
    height: 1px;
    background: ${(props) => props.$active?activeColor:cardText};
    margin: 0 auto;
    animation: 0.5s ${shrink} forwards;
    -webkit-animation: 0.5s ${shrink} forwards;
    -ms-animation: 0.5s ${shrink} forwards;
    -moz-animation: 0.5s ${shrink} forwards;
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
    color: ${headline};
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
        background: ${activeColor};
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