import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { ResponseContainerStyled, ResponseHeaderStyled, ResponseStyled, ResponseCopyButtonStyled, ResponseTitleStyled, CopySnack, ResponseItem } from '../styles/Response'


function Response(props) {
    const [showSnack, setShowSnack] = useState(0)

    const showSnackBar = () => {
        setShowSnack(1)   
        setTimeout(()=>{ setShowSnack(0) }, 1200);
    }

    const generateResponse = () => {
        if ([2,3].includes(props.tab.id)) {
            let response = props.tab.response.split('\n');
            return response.map((item, i) => (
                <ResponseItem key={i}>
                    <p>{item}</p>
                </ResponseItem>
                
            ));
        } else {
            return props.tab.response
        }
        
    }

    return (
        <ResponseContainerStyled>

            {props.tab.response!==''?
                <ResponseHeaderStyled>
                    <ResponseTitleStyled>Assistant Response</ResponseTitleStyled>
                    {showSnack===1?<CopySnack><FontAwesomeIcon icon={faCheck} size={"lg"} color={'green'}/> Copied!</CopySnack>:<></>}
                    <ResponseCopyButtonStyled onClick={() => {
                        navigator.clipboard.writeText(props.tab.response)
                        showSnackBar()}}>
                        <FontAwesomeIcon icon={faCopy} size={"lg"} color={'#fff'}/>
                    </ResponseCopyButtonStyled>
                </ResponseHeaderStyled>:
                <></> 
            }
            <ResponseStyled id='response'>{generateResponse()}</ResponseStyled>
        </ResponseContainerStyled>
    );
}

export default Response;