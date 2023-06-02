import styled from 'styled-components';
import { devices } from "../data/constants";
import { ff, cardText, bg } from './'

export const ResponseContainerStyled = styled.div`
    font-family: ${ff};
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* background-color: aquamarine; */
`;

export const ResponseHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const ResponseTitleStyled = styled.h3`
    font-size: 24px;
`;

export const ResponseCopyButtonStyled = styled.div`
    align-self: flex-end;
    background-color: ${bg};
    padding: 6px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin: 0px;
    
    &:hover {
        transform: scale(1.15);
        -ms-transform: scale(1.15);
        -webkit-transform: scale(1.15);
    }

    @media only screen and ${devices.md} {
        &:hover {
            transform: none;
            -ms-transform: none;
            -webkit-transform: none;
        }
    }
`;

export const ResponseStyled = styled.p`
    font-size: 16px;

    @media only screen and ${devices.md} {
        font-size: 16px;
    }
`;

export const ResponseItem = styled.div`
    margin: 10px 0px;
`;

export const CopySnack = styled.span`
    padding: 10px;
    background-color: ${cardText};
    color: ${bg};
    border-radius: 4px;
    position: absolute;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: calc(50% - 48px);
`;