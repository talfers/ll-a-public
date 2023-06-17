import styled from 'styled-components';
import { devices } from "../data/constants";
import * as theme from "./Theme";

export const ButtonStyled = styled.div`
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-family: ${theme.dark.colors.ff};
    border: 2px solid transparent;
    margin: 8px 0px;
    pointer-events: ${props => props.$disabled?'none':''};
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
    border: 2px solid ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.contrastText};

    &:hover {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.colors.subTextColor};
        color: ${({ theme }) => theme.colors.subTextColor};
    }

    @media only screen and ${devices.md} {
        &:hover {
            border: 2px solid transparent;
            background-color: ${({ theme }) => theme.colors.bg};
            color: ${({ theme }) => theme.colors.contrastText};
        }
    }
`;

export const SecondaryButtonStyled = styled(ButtonStyled)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.contrastText};
    color: ${({ theme }) => theme.colors.contrastText};

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.bg};
        background-color: ${({ theme }) => theme.colors.bg};
        color: #f5f5f5;
    }

    @media only screen and ${devices.md} {
        &:hover {
            background-color: transparent;
            border: 2px solid ${({ theme }) => theme.colors.contrastText};
            color: ${({ theme }) => theme.colors.contrastText};
        }
    }
`;