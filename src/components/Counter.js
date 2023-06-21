import React from 'react';
import { CounterContainerStyled, CounterActionContainerStyled, CounterHeaderStyled, CounterButtonStyled, CounterValueStyled } from '../styles/Counter';


function Counter({name, input, tab, section, onUpdate, step}) {

    const increment = () => {
        onUpdate(Number(input.value) + Number(step), tab, section, name)
    }

    const decrement = () => {
        if (Number(input.value) - Number(step) <= 0) {
            onUpdate(0, tab, section, name)
        } else {
            onUpdate(Number(input.value) - Number(step), tab, section, name)
        }
    }
    return (
        <CounterContainerStyled>
            <CounterHeaderStyled>{name.charAt(0).toUpperCase()+name.slice(1)}</CounterHeaderStyled>
            <CounterActionContainerStyled>
                <CounterButtonStyled $disabled={input.value===0} onClick={decrement}>-</CounterButtonStyled>
                <CounterValueStyled $step={step} type="text" value={Number(input.value)} onChange={(e) => {
                    onUpdate(e.target.value, tab, section, name)

                }}/>
                <CounterButtonStyled onClick={increment}>+</CounterButtonStyled>
            </CounterActionContainerStyled>
            
        </CounterContainerStyled>
    );
}



export default Counter;