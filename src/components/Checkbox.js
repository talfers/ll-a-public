import React, { useState } from 'react';
import { InputContainerStyled, InputStyled } from '../styles/Form';


function Checkbox({input, section, name, tab, onChange}) {
    let [checked, setChecked] = useState(false)

    return (
        <InputContainerStyled
        key={input.name} 
        $type={input.type}
        $size={input.size}
        >
            <InputStyled 
                type="checkbox"
                id={name}
                name={name}
                checked={input.value} 
                onChange={(e) => {
                    setChecked(!checked)
                    onChange(checked, tab, section, name)
                }} 
            />

                          
        </InputContainerStyled>
    );
}



export default Checkbox;