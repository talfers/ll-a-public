import styled from 'styled-components';
import { devices } from "../data/constants";
import { ContainerStyled } from './Main';
import { cardText } from '.';

export const ProfileContainerStyled = styled(ContainerStyled)`
    position: relative;
`;

export const ProfileHeaderStyled = styled.h2`
    
`;

export const ProfileTextStyled = styled.div`
    @media only screen and ${devices.md} {
        width: 80%;
    }
`;

export const SignOutButtonStyled = styled.div`
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
    border: 1px solid ${cardText};
    margin-left: 12px;
    text-align: center;
`;

export const GoBackButtonStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
`;