import styled from 'styled-components';
import { devices } from "../data/constants";
import { ff, bg } from './'

export const ButtonStyled = styled.div`
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-family: ${ff};
    border: 2px solid transparent;
    margin: 8px;
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
    background-color: ${bg};
    color: #f5f5f5;

    &:hover {
        background-color: transparent;
        border: 2px solid white;
        color: white;
    }

    @media only screen and ${devices.md} {
        &:hover {
            border: 2px solid transparent;
            background-color: ${bg};
            color: #f5f5f5;
        }
    }
`;