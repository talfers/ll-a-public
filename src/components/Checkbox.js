import React, { useState } from 'react';
import { InputContainerStyled, InputStyled } from '../styles/Form';


function Checkbox(props) {
    let [checked, setChecked] = useState(false)

    return (
        <InputContainerStyled
        key={props.input.name} 
        $type={props.input.type}
        $size={props.input.size}
        >
            <InputStyled 
                type="checkbox"
                id={props.name}
                name={props.name}
                checked={props.input.value} 
                onChange={(e) => {
                    setChecked(!checked)
                    props.onChange(checked, props.tab, props.section, props.name)
                }} 
            />

                          
        </InputContainerStyled>
    );
}



export default Checkbox;