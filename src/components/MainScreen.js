import React, { useContext, useState, useEffect } from 'react';
import Tabs from './Tabs';
import Home from './Home';
import { TabsContainerStyled } from '../styles/Tabs';
import { useAuth } from '../hooks/useAuth';
import { Context as TaskContext } from '../context/TaskContext';
import { usePayments } from '../hooks/usePayments';
import Hamburger from './Hamburger';


function MainScreen() {
    const {user} = useAuth()
    const {state} = useContext(TaskContext)
    const { getCurrentPlan, getCustomer } = usePayments();
    const [subscription, setSubscription] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [activeTabId, setActiveTab] = React.useState(state.tabs[0].id);
    
    const activeTab = React.useMemo(() => (
        state.tabs.find((tab) => (
            tab.id === activeTabId
        ))
    ), [activeTabId, state.tabs]);

    useEffect(() => {
        const getDetails = async () => {
            let sub = await getCurrentPlan(user.uid);
            setSubscription(sub)
            let cust = await getCustomer(user.email);
            setCustomer(cust)
        }
        getDetails()
    }, [user.uid, getCurrentPlan, user.email, getCustomer])

    return (
        <TabsContainerStyled>
            <Hamburger 
                tabs={state.tabs} 
                onNavClick={setActiveTab}
                activeTabId={activeTabId}
                />
            <Home tabs={state.tabs} activeTab={activeTab} customer={customer} subscription={subscription}/>
            {/* <Tabs activeTab={props.activeTab} user={user} tabs={state.tabs} customer={customer} subscription={subscription} /> */}
        </TabsContainerStyled>
    );
}

export default MainScreen