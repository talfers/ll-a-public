import styled from 'styled-components';
import { devices } from "../data/constants";
import { ff, cardText, bg } from './'

export const ResponseContainerStyled = styled.div`
    font-family: ${ff};
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ResponseHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    @media only screen and ${devices.md} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ResponseTitleStyled = styled.h3`
    font-size: 24px;
`;


export const ResponseActionButtonsContainerStyled = styled.div`
    align-self: flex-end;
    display: flex;
    @media only screen and ${devices.md} {
        align-self: center;
    }
`;

export const ResponseButtonStyled = styled.div`
    background-color: ${bg};
    padding: 6px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    margin: 0px 4px;
    
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

export const ResponseStyled = styled.div`
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
    width: ${props => props.$size?`${props.$size}px`:''};
    display: flex;
    align-items: center;
    justify-content: space-between;
    left:  ${props => props.$size?`calc(50% - ${props.$size/2}px)`:''};
`;