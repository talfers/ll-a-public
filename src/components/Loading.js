import React from 'react';
import { LoadingContainerStyled, LoadingIndicatorStyled, LoadingHeaderStyled, LoadingContentContainerStyled } from '../styles/Indicator';


function Loading(props) {
    return (
        <LoadingContainerStyled>
            <LoadingContentContainerStyled>
                <LoadingHeaderStyled>{props.message}</LoadingHeaderStyled>
                <LoadingIndicatorStyled />                   
            </LoadingContentContainerStyled>
        </LoadingContainerStyled>
    );
}

export default Loading;