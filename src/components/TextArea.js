import React from 'react';
import { InputContainerStyled, TextAreaStyled, LabelStyled } from '../styles/Form';



function TextArea({input, name, tab, section, onUpdate}) {


    return (
        <InputContainerStyled
        key={input.name} 
        $type={input.type}
        $size={input.size}
        >
            <LabelStyled htmlFor={input.name} className="label">{input.title}</LabelStyled>
            <TextAreaStyled 
                type={input.type} 
                id={name} 
                name={name}
                value={input.value} 
                onChange={(e) => {
                    onUpdate(e.target.value, tab, section, name)
                }} 
                placeholder={input.placeholder} 
            />     
        </InputContainerStyled>
    );
}



export default TextArea;