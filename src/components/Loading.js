import React from 'react';
import { LoadingContainerStyled, LoadingIndicatorStyled, LoadingHeaderStyled, LoadingTextStyled, LoadingContentContainerStyled } from '../styles/Indicator';


function Loading(props) {
    return (
        <LoadingContainerStyled>
            <LoadingContentContainerStyled>
                <LoadingHeaderStyled>Awaiting response from assistant</LoadingHeaderStyled>
                <LoadingTextStyled>This could take up to 1 minute...</LoadingTextStyled>
                <LoadingIndicatorStyled />                   
            </LoadingContentContainerStyled>
        </LoadingContainerStyled>
    );
}

export default Loading;