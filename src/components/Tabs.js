import React from 'react';
import Tab from './Tab'
import { TabsContainerStyled } from '../styles/Tabs';

function Tabs({activeTab, customer, subscription}) {

    return (
        <TabsContainerStyled>
            <Tab tab={activeTab} customer={customer} subscription={subscription} />
        </TabsContainerStyled>  
            

    );
}

export default Tabs;