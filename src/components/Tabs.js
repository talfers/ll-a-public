import React from 'react';
import Navigation from './Navigation';
import Hamburger from './Hamburger';
import Tab from './Tab'

function Tabs(props) {
    const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);
    
    const activeTab = React.useMemo(() => (
        props.tabs.find((tab) => (
            tab.id === activeTabId
        ))
    ), [activeTabId, props.tabs]);

    return (

        <div>
                <Hamburger 
                    tabs={props.tabs} 
                    onNavClick={setActiveTab}
                    activeTabId={activeTabId}
                />
                <Navigation 
                    tabs={props.tabs} 
                    onNavClick={setActiveTab}
                    activeTabId={activeTabId}
                />
            <Tab tab={activeTab} customer={props.customer} subscription={props.subscription} />
        </div>
    );
}

export default Tabs;