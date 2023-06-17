import styled from 'styled-components';


export const TabsContainerStyled = styled.div`
    max-width: 80%;
    margin: 0px auto;
    margin-top: 12px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.cardBG};
    min-height: 400px;
`;

export const TabContentContainerStyled = styled.div`
    padding: 30px;
    color: ${({ theme }) => theme.colors.paragraph};
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
   
`;

