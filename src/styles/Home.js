import styled from 'styled-components';
import { devices } from "../data/constants";


export const BoxesContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 12px;
`;

export const BoxContainerStyled = styled.div`
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    margin: 12px 24px 12px 0px;
    border-radius: 16px;
    width: 200px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    transition: background 0.3s ease-out;
    &:hover {
        background: ${({ theme }) => theme.colors.opacityColor};
    }
    @media only screen and ${devices.md} {
        width: 100%;
        margin: 12px 0px 12px 0px;
        height: 100px;
    }
`;

export const BoxTitleStyled = styled.h3`
    font-size: 16px;
    font-weight: 600;
`;


export const BoxIconContainerStyled = styled.div`

`;

