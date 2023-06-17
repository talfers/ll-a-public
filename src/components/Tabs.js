import React from 'react';
import Tab from './Tab'

function Tabs(props) {

    return (
        <div>  
            <Tab tab={props.activeTab} customer={props.customer} subscription={props.subscription} />
        </div>
    );
}

export default Tabs;