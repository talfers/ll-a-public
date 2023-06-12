import React from 'react';
import Form from './Form'
import Response from './Response';
import Loading from './Loading';
import { TabContentContainerStyled, TabContentHeaderStyled, TabContentTextStyled, DividerStyled, TabContentShortTextStyled } from '../styles/Tabs'

function Tab(props) {
    return (
        <TabContentContainerStyled>
            {
                props.tab.loading?
                <Loading message={"Awaiting response from assistant.."}/>:<></>
            }
                <div>
                    <TabContentHeaderStyled>{props.tab.title}</TabContentHeaderStyled>
                    <TabContentTextStyled>{props.tab.text}</TabContentTextStyled>
                    <TabContentShortTextStyled>{props.tab.shortDescription}</TabContentShortTextStyled>
                    <div className='tabs__interaction__content'>
                        <Form tab={props.tab} />
                        <br></br>
                        <DividerStyled></DividerStyled>
                        <br></br>
                        <Response tab={props.tab} />
                    </div>
                </div>
        </TabContentContainerStyled>
    );
}

export default Tab