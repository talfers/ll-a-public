import styled from 'styled-components';
import { devices } from "../data/constants"
import { bg, cardText, ff, cardBG } from './'


export const ProductsContainerStyled = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: ${cardBG};
    font-family: ${ff};
    padding: 24px;
    @media only screen and ${devices.md} {
        display: flex;
    }
`;

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    margin: 0 12px;
    border-radius: 12px;
    background: ${cardText};
    color: ${bg};
    @media only screen and ${devices.md} {
        display: flex;
    }
`;

export const IconContainerStyled = styled.div`
    // padding: 12px;
    // border-radius: 50%;
    // border: 2px solid ${bg};
    margin-bottom: 10px;
    color: ${bg};
`;