import React from 'react';
import { InputContainerStyled, SelectStyled } from '../styles/Form';


function Selector(props) {
    return (
        <InputContainerStyled
        key={props.input.name} 
        $type={props.input.type}
        $size={props.input.size}
        >
            <SelectStyled 
                type="text"
                id={props.name}
                name={props.name}
                value={props.input.value} 
                onChange={(e) => {
                    props.onChange(e.target.value, props.tab, props.section, props.name)
                }} 
                placeholder={props.input.placeholder} 
            >
                {
                    props.options.map((o, i) => (
                        <option key={i} value={o}>{o}</option>
                    ))
                }
            </SelectStyled>

                          
        </InputContainerStyled>
    );
}



export default Selector;