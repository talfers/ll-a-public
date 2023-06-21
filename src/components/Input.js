import React, {useContext} from 'react';
import { Context as TaskContext } from '../context/TaskContext';
import Selector from './Selector';
import { InputStyled, InputContainerStyled, TextAreaStyled, LabelStyled } from '../styles/Form';
import locations from '../data/locations';
import Checkbox from './Checkbox';
import Counter from './Counter';


function Input(props) {
    const {updateValue} = useContext(TaskContext);

    return (
        <InputContainerStyled
        key={props.input.name} 
        $type={props.input.type}
        $size={props.input.size}
        >
            {props.input.type==='number'?null:<LabelStyled htmlFor={props.input.name} className="label">{props.input.title}</LabelStyled>}
            {
                props.input.type === 'textarea'?
                <TextAreaStyled 
                    type={props.input.type} 
                    id={props.name} 
                    name={props.name}
                    value={props.input.value} 
                    onChange={(e) => {
                        updateValue(e.target.value, props.tab, props.section, props.name)
                    }} 
                    placeholder={props.input.placeholder} 
                />:props.input.type === 'select'?
                <Selector
                    input={props.input}
                    name={props.name}
                    options={locations}
                    tab={props.tab}
                    section={props.section}
                    onChange={updateValue}
                />:props.input.type === 'checkbox'?
                <Checkbox
                    input={props.input}
                    name={props.name}
                    tab={props.tab}
                    section={props.section}
                    onChange={updateValue}
                />:props.input.type === 'number'?
                <Counter 
                    input={props.input}
                    name={props.name}
                    tab={props.tab}
                    section={props.section}
                    onUpdate={updateValue}
                    step={props.input.step}
                />
                :
                <InputStyled 
                    type={props.input.type}
                    id={props.name}
                    name={props.name}
                    value={props.input.value} 
                    onChange={(e) => {
                        updateValue(e.target.value, props.tab, props.section, props.name)
                    }} 
                    placeholder={props.input.placeholder} 
                />
            }                  
        </InputContainerStyled>
    );
}



export default Input;