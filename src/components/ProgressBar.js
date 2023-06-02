import React from 'react';
import { ProgressContainerStyled, ProgressBarOuterStyled, ProgressBarStyled, ProgressHeaderStyled, ProgressHeaderSpanStyled } from '../styles/Indicator';

function ProgressBar(props) {
    return (
        <ProgressContainerStyled>
            <ProgressHeaderStyled>
                Step: {`${props.step + 1}/${props.steps.length} - `}
                <ProgressHeaderSpanStyled>{props.steps[props.step].charAt(0).toUpperCase() + props.steps[props.step].slice(1).replace("_", " ")}</ProgressHeaderSpanStyled>
            </ProgressHeaderStyled>
            <ProgressBarOuterStyled>
                <ProgressBarStyled $progress={Number(props.step)/Number(props.steps.length-1)}/>
            </ProgressBarOuterStyled>
                              
        </ProgressContainerStyled>
    );
}

export default ProgressBar;