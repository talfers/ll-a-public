import styled from 'styled-components';
import { devices } from "../data/constants";


export const MarginContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    color: ${({ theme }) => theme.colors.contrastText};
`;

export const HeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
`;

export const MarginTextStyled = styled.p`
    margin: 40px;
    @media only screen and ${devices.md} {
        display: none;
    }
`;