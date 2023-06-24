import styled from 'styled-components';
import { devices } from "../data/constants";


export const ProfileContentContainerStyled = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

export const ProfileHeaderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`;

export const ProfileTextStyled = styled.div`
    @media only screen and ${devices.md} {
        width: 80%;
    }
`;

export const ActionButtonStyled = styled.div`
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.cardText};
    margin: 4px 0px 4px 12px;
    text-align: center;
`;

export const GoBackButtonStyled = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // cursor: pointer;
    // position: absolute;
    // top: 10px;
    // left: 10px;
`;