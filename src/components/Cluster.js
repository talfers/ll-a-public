import React from 'react';
import iconMap from '../data/iconMap';
import { BoxIconContainerStyled, BoxTitleStyled } from '../styles/Home';
import { ClusterContainerStyled, ClusterItemContainerStyled } from '../styles/Cluster';
import { IconContext } from 'react-icons';

function Cluster({name, input, tab, section, onUpdate}) {
    // const [selected, setSelected] = useState(input.value)

    const onSelection = (e, id) => {
        let tempSelected = {...input.value};
        tempSelected[id] = !tempSelected[id];
        onUpdate(tempSelected, tab, section, name)
        console.log(input.value);
    }

    const createBoxes = () => {
        return Object.keys(input.value).map((key) => (
            <IconContext.Provider key={key} value={{ style: { fontSize: '20px' } }}>
                <ClusterItemContainerStyled key={key} $selected={input.value[key]} onClick={(e) => onSelection(e, key)}>
                    <BoxIconContainerStyled>{iconMap[key]}</BoxIconContainerStyled>
                    <BoxTitleStyled>{key.charAt(0).toUpperCase()+key.slice(1).replaceAll('_', ' ')}</BoxTitleStyled>
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