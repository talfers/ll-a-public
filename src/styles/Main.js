import styled from 'styled-components';
import { devices } from "../data/constants";
import { cardBG, cardText } from './'

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    background: ${cardBG};
    border-radius: 12px;
`;

export const ParagraphStyled = styled.p`
    color: ${cardText};
    @media only screen and ${devices.md} {
        
    }
`;