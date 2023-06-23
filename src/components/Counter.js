import React, {useState} from 'react';
import { CounterContainerStyled, CounterActionContainerStyled, CounterHeaderStyled, CounterButtonStyled, CounterValueStyled } from '../styles/Counter';
import iconMap from '../data/iconMap';

function Counter({name, input, tab, section, onUpdate, step}) {
    const [decrementDisabled, setDecrementDisabled] = useState(input.value===0?1:0);
    const increment = () => {
        if(decrementDisabled===1){setDecrementDisabled(0)}
        onUpdate(Number(input.value) + Number(step), tab, section, name)
    }

    const decrement = () => {
        if (Number(input.value) - Number(step) <= 0) {
            setDecrementDisabled(1)
            onUpdate(0, tab, section, name)
        } 
        else {
            if(decrementDisabled===1){setDecrementDisabled(0)}
            onUpdate(Number(input.value) - Number(step), tab, section, name)
        }
    }
    return (
        <CounterContainerStyled>
            <CounterHeaderStyled>{name.charAt(0).toUpperCase()+name.slice(1).replaceAll('_', ' ')}</CounterHeaderStyled>
            <CounterActionContainerStyled>
                <CounterButtonStyled $disabled={decrementDisabled===1} onClick={decrement}>{iconMap['Minus']}</CounterButtonStyled>
                <CounterValueStyled $step={step} type="text" value={Number(input.value)} onChange={(e) => {
                    onUpdate(e.target.value, tab, section, name)

                }}/>
                <CounterButtonStyled onClick={increment}>{iconMap['Plus']}</CounterButtonStyled>
            </CounterActionContainerStyled>
            
        </CounterContainerStyled>
    );
}



export default Counter;