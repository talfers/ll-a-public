import styled from 'styled-components';
import { devices } from "../data/constants";
import * as theme from "./Theme";

export const ProductModalStyled = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.cardBG};
    color: ${({ theme }) => theme.colors.cardText};
    font-family: ${({ theme }) => theme.colors.ff};
    padding: 24px;
    margin-bottom: 24px;
    @media only screen and ${devices.md} {
        width: 75%;
        display: flex;
        padding: 12px;
    }
`;

export const ProductsContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    @media only screen and ${devices.md} {
        flex-direction: column;
        padding: 6px;
    }
`;

export const CloseButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    margin: 0 12px;
    border-radius: 12px;
    border: ${props => props.selected?`2px solid ${theme.dark.colors.contrastText}`:'2px solid transparent'};
    @media only screen and ${devices.md} {
        height: inherit;
        padding: 12px;
    }
`;

export const IconContainerStyled = styled.div`
    // padding: 12px;
    // border-radius: 50%;
    // border: 2px solid ${({ theme }) => theme.colors.bg};
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.bg};
`;

export const ButtonContainerStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ProductHeader = styled.h2`
    @media only screen and ${devices.md} {
        font-size: 1em;
    }
    @media only screen and ${devices.xxl} {
        font-size: 1.25em;
    }
`;

export const ProductText = styled.p`
    margin-bottom: ${props => props.$spaceBelow?'20px':'0px'};
    color: ${({ theme }) => theme.colors.subTextColor};
    @media only screen and ${devices.md} {
        font-size: 0.7em;
        margin-bottom: ${props => props.$spaceBelow?'8px':'0px'};
        display: ${props => props.$hideMobile?'none':''};
    }
`;