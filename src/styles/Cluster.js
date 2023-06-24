import styled from 'styled-components';
import { devices } from "../data/constants";

export const ClusterContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 12px;
    @media only screen and ${devices.md} {
        justify-content: center;
    }
`;

export const ClusterItemContainerStyled = styled.div`
    padding: 20px;
    margin: 12px 24px 12px 0px;
    border-radius: 16px;
    width: 200px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    border: ${props => props.$selected?`1.5px black solid`:`1px solid ${props.theme.colors.borderColor}`};
    background: ${props => props.$selected?props.theme.colors.opacityColor:'inherit'};
    transition: background 0s, transform 0.4s ease-out;
    &:hover {
        border: 1.5px black solid;
        background: ${props => props.$selected?props.theme.colors.opacityColor:'transparent'};

    }
    &:active {
        transform: scale(0.95);
    }
    @media only screen and ${devices.md} {
        width: 100%;
        &:hover {
            border: ${props => props.$selected?`1.5px black solid`:`1px solid ${props.theme.colors.borderColor}`};
            background: ${props => props.$selected?props.theme.colors.opacityColor:'inherit'};
        }
    }
   
    
`;
