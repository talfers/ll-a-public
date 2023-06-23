import styled from 'styled-components';
import { BoxContainerStyled } from './Home';

export const ClusterContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 12px;
`;

export const ClusterItemContainerStyled = styled(BoxContainerStyled)`
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
`;

