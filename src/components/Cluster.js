import React, { useState } from 'react';
import iconMap from '../data/iconMap';
import { BoxIconContainerStyled, BoxTitleStyled } from '../styles/Home';
import { ClusterContainerStyled, ClusterItemContainerStyled } from '../styles/Cluster';
import { IconContext } from 'react-icons';

function Cluster({name, input, tab, section, onUpdate}) {
    const [selected, setSelected] = useState([])

    const onSelection = (e, id) => {
        e.preventDefault()
        let tempSelected = [...selected];
        const index = tempSelected.indexOf(id);
        if (index > -1) { 
            tempSelected.splice(index, 1);
        } else {
            tempSelected.push(id)
        }
        setSelected(tempSelected)
        console.log(selected);
        // onUpdate(selected, tab, section, name)
    }

    const createBoxes = () => {
        return input.value.map((b, i) => (
            <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                <ClusterItemContainerStyled key={i} $selected={selected.includes(i)} onClick={(e) => onSelection(e, i)}>
                    <BoxIconContainerStyled>{iconMap[b.name]}</BoxIconContainerStyled>
                    <BoxTitleStyled>{b.name.charAt(0).toUpperCase()+b.name.slice(1).replaceAll('_', ' ')}</BoxTitleStyled>
                </ClusterItemContainerStyled>
            </IconContext.Provider>
           
        ))
    }
    
    return (
        <ClusterContainerStyled>
            {createBoxes()}
        </ClusterContainerStyled>
    );
}



export default Cluster;