import styled from 'styled-components';
import { devices } from "../data/constants";
import { NavLink } from 'react-router-dom';
import { cardBG, cardText, contrastText, headline } from './'

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
    background: ${({ theme }) => theme.colors.cardBG};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.cardText};
    @media only screen and ${devices.xxl} {
        width: 95%;
        max-width: 2000px;
    }
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
    @media only screen and ${devices.md} {
        font-size: 30px;
    }
`;

export const NavLinkWrapper = styled(NavLink)`
    color: ${contrastText};
`;

export const FontAwesomeIconWrapper = styled.div`
    color: ${props => props.$theme==='light'?contrastText:cardText};
`;

export const ModalBackgroundStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.opacityColor};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 75;
`;

export const PageHeaderStyled = styled.h1`
    font-size: 2em;
    color: ${({ theme }) => theme.colors.cardText};
    align-self: flex-start;
`;

export const PageHeader2Styled = styled.h2`
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.cardText};
    align-self: flex-start;

`;

export const PageHeaderSubTextStyled = styled.p`
    margin: 12px 0px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subTextColor};
    text-align: left;
    align-self: flex-start;
    @media only screen and ${devices.md} {
        display: none;
    }
    
`;

export const PageHeaderSubTextMobileStyled = styled.p`
    display: none;
    @media only screen and ${devices.md} {
        display: block;
    }
`;

export const DividerStyled = styled.hr`
    border: 1px solid ${({ theme }) => theme.colors.contrastText};
`;

export const PageSubTitleStyled = styled.p`
    margin: 12px 0px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.subTextColor};
    text-align: left;
    align-self: flex-start;
`;

export const CopySnack = styled.span`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.contrastText};
    border: 1.5px solid ${({ theme }) => theme.colors.contrastText};
    border-radius: 4px;
    position: absolute;
    width: ${props => props.$size?`${props.$size}px`:''};
    display: flex;
    align-items: center;
    justify-content: space-between;
    left:  ${props => props.$size?`calc(50% - ${props.$size/2}px)`:''};
`;