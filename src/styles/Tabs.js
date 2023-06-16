import styled from 'styled-components';
import { devices } from "../data/constants";


export const TabsContainerStyled = styled.div`
    max-width: 80%;
    margin: 0px auto;
`;

export const TabContentContainerStyled = styled.div`
    padding: 30px;
    color: ${({ theme }) => theme.colors.paragraph};
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.cardBG};
    min-height: 400px;
`;

export const TabContentHeaderStyled = styled.h3`
    color: ${({ theme }) => theme.colors.headline};
    font-weight: 700;
    font-family: inherit;
    font-size: 24px;
    margin-bottom: 10px;
`;

export const TabContentTextStyled = styled.p`
    margin: 20px 0px;
    @media only screen and ${devices.md} {
        display: none;
    }
`;

export const TabContentShortTextStyled = styled.p`
    display: none;
    @media only screen and ${devices.md} {
        display: block;
    }
`;

export const DividerStyled = styled.hr`
    border: 1px solid ${({ theme }) => theme.colors.cardText};
`;