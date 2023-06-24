import styled from 'styled-components';
import { devices } from "../data/constants";
import * as theme from "./Theme";

export const ButtonStyled = styled.div`
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    font-family: ${theme.dark.colors.ff};
    border: 1.5px solid transparent;
    margin: 8px 8px 8px 0px;
    pointer-events: ${props => props.$disabled?'none':''};
    transition: background-color 0.3s ease-out, border-color 0.3s ease-out;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and ${devices.xxl} {
        width: 20%;
        max-width: 240px;
        justify-content: center;
    }
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
    border: 1.5px solid ${({ theme }) => theme.colors.activeColor};
    background-color: ${({ theme }) => theme.colors.activeColor};
    color: ${({ theme }) => theme.colors.bg};
    &:hover {
        background-color: ${({ theme }) => theme.colors.activeColorDarkened};
        border-color: ${({ theme }) => theme.colors.activeColorDarkened};
    }
    @media only screen and ${devices.md} {
        &:hover {
            border: 1.5px solid ${({ theme }) => theme.colors.activeColor};
            background-color: ${({ theme }) => theme.colors.activeColor};
        }
    }
`;

export const SecondaryButtonStyled = styled(ButtonStyled)`
    background-color: transparent;
    border: 1.5px solid ${({ theme }) => theme.colors.contrastText};
    color: ${({ theme }) => theme.colors.contrastText};
    &:hover {
        background-color: ${({ theme }) => theme.colors.opacityColor};
    }
    @media only screen and ${devices.md} {
        &:hover {
            background-color: transparent;
        }
    }
`;