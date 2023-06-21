import styled from 'styled-components';
import { devices } from "../data/constants";


export const ResponseContainerStyled = styled.div`
    font-family: ${({ theme }) => theme.colors.ff};
    margin-top: 12px;
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


export const ResponseActionButtonsContainerStyled = styled.div`
    align-self: flex-end;
    display: flex;
    @media only screen and ${devices.md} {
        align-self: flex-start;
    }
`;

export const ResponseButtonStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 6px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;    
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