import styled from 'styled-components';


export const CounterContainerStyled = styled.div`
    display: flex;
    align-items: center;
    min-height: 60px;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
`;

export const CounterActionContainerStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const CounterButtonStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.subTextColor};
    color: ${({ theme }) => theme.colors.subTextColor};
    opacity: ${(props) => props.$disabled?0.5:1};
    font-size: 24px;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    margin: 0px 4px;
    cursor: pointer;
    z-index: 0;
    pointer-events: ${(props) => props.$disabled?'none':""};
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.contrastText};
        color: ${({ theme }) => theme.colors.contrastText};
    }
`;

export const CounterValueStyled = styled.input`
    border: none;
    width: ${props => props.$step>1?`40px`:`20px`};
    text-align: center;
    &:focus {
        outline: none !important;
        border: none;
    }
`;

export const CounterHeaderStyled = styled.div`
    font-size: 18px;
    font-weight: 600;
    color:  ${({ theme }) => theme.colors.contrastText};

`;