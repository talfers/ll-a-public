import React, { useContext } from 'react';
import Tabs from './Tabs';
import { TabsContainerStyled } from '../styles/Tabs';
import { UserAuth } from '../context/AuthContext';
import { Context as TaskContext } from '../context/TaskContext';

function MainScreen() {
    const {user} = UserAuth()
    const {state} = useContext(TaskContext)

    return (
        <TabsContainerStyled>
            <Tabs user={user} tabs={state.tabs}/>
        </TabsContainerStyled>
    );
}

export default MainScreen