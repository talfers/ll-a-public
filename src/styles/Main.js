import styled from 'styled-components';
import { devices } from "../data/constants";
import { NavLink } from 'react-router-dom';
import { cardBG, cardText, contrastText, headline, bg } from './'

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    background: ${cardBG};
    border-radius: 12px;
`;

export const ParagraphStyled = styled.p`
    color: ${cardText};
    @media only screen and ${devices.md} {
        
    }
`;

export const ContentHeaderStyled = styled.h1`
    color: ${headline};
    font-weight: 700;
    font-family: inherit;
    font-size: 36px;
    margin-bottom: 10px;
`;

export const NavLinkWrapper = styled(NavLink)`
    color: ${contrastText};
`;

export const FontAwesomeIconWrapper = styled.div`
    color: ${props => props.$theme==='light'?contrastText:bg};
`;

export const ModalBackgroundStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
`;