import styled, { keyframes } from 'styled-components';
import { devices } from "../data/constants";

const lineAnim = keyframes`   
    0% {
        left: -40%;
    }
    50% {
        left: 20%;
        width: 80%;
    }
    100% {
        left: 100%;
        width: 100%;
    }
`;

export const LoadingContainerStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.opacityColor};
    opacity: 0.90;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 95;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoadingContentContainerStyled = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 40px 30px;
    margin: 0px 24px;
    text-align: center;
    z-index: 95;
    
    @media only screen and ${devices.md} {
        max-width: 60%;
        padding: 20px 12px;
        margin: 0px 12px; 
    }
`;

export const LoadingHeaderStyled = styled.h2`
    color: ${({ theme }) => theme.colors.cardText};
    opacity: 1;
    font-size: 24px;
    margin-bottom: 16px;
    @media only screen and ${devices.md} {
        font-size: 16px;
    }
`;

export const LoadingTextStyled = styled.p`
    margin-bottom: 12px;
    opacity: 1;
    font-size: 16px;
    @media only screen and ${devices.md} {
        font-size: 12px;
    }
    
`;

export const LoadingIndicatorStyled = styled.div`
    width: 80%;
    height: 6px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    margin: 0px auto;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    opacity: 1;

    &:before {
        content: "";
        position: absolute;
        left: -50%;
        height: 3px;
        width: 40%;
        background-color: ${({ theme }) => theme.colors.activeColor};
        -webkit-animation: ${lineAnim} 1s linear infinite;
        -moz-animation: ${lineAnim} 1s linear infinite;
        animation: ${lineAnim} 1s linear infinite;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
      }
`;

export const ProgressContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
`;

export const ProgressBarOuterStyled = styled.div`
    background: ${({ theme }) => theme.colors.borderColor};
    width: 75%;
    height: 8px;
    border-radius: 4px;
    margin: 4px 0px;

    @media only screen and ${devices.md} {
        width: 90%;
    }
`;

export const ProgressBarStyled = styled.div`
    background: ${({ theme }) => theme.colors.activeColor};
    width: ${(props) => props.$progress?`${props.$progress*100}%`:'0%'};
    height: 8px;
    border-radius: 4px;
`;

export const ProgressHeaderStyled = styled.h4`
    color: ${({ theme }) => theme.colors.contrastText};
`;

export const ProgressHeaderSpanStyled = styled.span`
    color: ${({ theme }) => theme.colors.cardText};
    margin-left: 8px;
`;