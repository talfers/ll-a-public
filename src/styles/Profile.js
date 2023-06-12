import styled from 'styled-components';
import { devices } from "../data/constants";
import { ContainerStyled } from './Main';
import { cardText } from '.';

export const ProfileContainerStyled = styled(ContainerStyled)`
    position: relative;
`;

export const ProfileContentContainerStyled = styled.div`
    text-align: left;
    margin-bottom: 20px;
    margin-top: 24px;
`;

export const ProfileHeaderContainerStyled = styled.div`
    display: flex;
    border-bottom: 1.5px solid ${cardText};
    margin-bottom: 4px;
`;

export const ProfileHeaderStyled = styled.h2`
    margin-left: 8px;
    margin-bottom: 4px;
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