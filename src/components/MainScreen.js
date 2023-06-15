import React, { useContext, useState, useEffect } from 'react';
import Tabs from './Tabs';
import { TabsContainerStyled } from '../styles/Tabs';
import { useAuth } from '../hooks/useAuth';
import { Context as TaskContext } from '../context/TaskContext';
import { usePayments } from '../hooks/usePayments';

function MainScreen() {
    const {user} = useAuth()
    const {state} = useContext(TaskContext)
    const { getCurrentPlan, getCustomer } = usePayments();
    const [subscription, setSubscription] = useState(null);
    const [customer, setCustomer] = useState(null);

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
            <Tabs user={user} tabs={state.tabs} customer={customer} subscription={subscription} />
        </TabsContainerStyled>
    );
}

export default MainScreen