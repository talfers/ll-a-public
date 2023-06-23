import React, {useContext} from 'react';
import { Context as TaskContext } from '../context/TaskContext';
import Selector from './Selector';
import { InputStyled, InputContainerStyled, LabelStyled, TextAreaStyled } from '../styles/Form';
import locations from '../data/locations';
import Checkbox from './Checkbox';
import Counter from './Counter';
import Cluster from './Cluster';
import TextArea from './TextArea';


function Input(props) {
    const {updateValue} = useContext(TaskContext);

    return (
        <InputContainerStyled
        key={props.input.name} 
        $type={props.input.type}
        $size={props.input.size}
        >
            {props.input.type==='number'||props.input.type==='cluster'||props.input.type==='textarea'?null:
                <LabelStyled htmlFor={props.input.name} className="label">{props.input.title}</LabelStyled>
            }
            {
                props.input.type === 'textarea'?
                <TextArea 
                    input={props.input}
                    name={props.name}
                    tab={props.tab}
                    section={props.section}
                    onUpdate={updateValue} 
                />:props.input.type === 'textareasimple'?
                <TextAreaStyled 
                    type={props.input.type} 
                    id={props.name} 
                    name={props.name}
                    value={props.input.value} 
                    onChange={(e) => {
                        updateValue(e.target.value, props.tab, props.section, props.name)
                    }} 
                    placeholder={props.input.placeholder} 
                />:
                props.input.type === 'select'?
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
                    onChange={updateValue}/>
                :props.input.type === 'number'?
                <Counter 
                    input={props.input}
                    name={props.name}
                    tab={props.tab}
                    section={props.section}
                    onUpdate={updateValue}
                    step={props.input.step}
                />
                :props.input.type === 'cluster'?
                <Cluster
                    input={props.input}
                    name={props.name}
                    tab={props.tab}
                    section={props.section}
                    onUpdate={updateValue}
                />
                
                :<InputStyled 
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