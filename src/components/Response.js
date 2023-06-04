import React, { useState } from 'react';
import { useDownloadFile } from "../hooks/useDownloadFile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck, faFileWord, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { 
    ResponseActionButtonsContainerStyled, 
    ResponseContainerStyled, 
    ResponseHeaderStyled, 
    ResponseStyled, 
    ResponseButtonStyled, 
    ResponseTitleStyled, 
    CopySnack, 
    ResponseItem 
} from '../styles/Response'


function Response(props) {
    const [showSnack, setShowSnack] = useState('')
    const [downloadFile] = useDownloadFile()

    const showSnackBar = (message) => {
        setShowSnack(message)   
        setTimeout(()=>{ setShowSnack('') }, 1200);
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
                    {showSnack!==''?<CopySnack $size={showSnack.includes('Downloaded')?172:96}><FontAwesomeIcon icon={faCheck} size={"lg"} color={'green'}/>{showSnack}</CopySnack>:<></>}
                    <ResponseActionButtonsContainerStyled>
                        <ResponseButtonStyled onClick={() => {
                            navigator.clipboard.writeText(props.tab.response)
                            showSnackBar('Copied!')}}>
                            <FontAwesomeIcon icon={faCopy} size={"lg"} color={'#fff'}/>
                        </ResponseButtonStyled>
                        <ResponseButtonStyled onClick={() => {
                            downloadFile('docx', 'response', props.tab.shortName)
                            showSnackBar('Doc Downloaded!')}}>
                            <FontAwesomeIcon icon={faFileWord} size={"lg"} color={'#fff'}/>
                        </ResponseButtonStyled>
                        <ResponseButtonStyled onClick={() => {
                            downloadFile('pdf', 'response', props.tab.shortName)
                            showSnackBar('PDF Downloaded!')}}>
                            <FontAwesomeIcon icon={faFilePdf} size={"lg"} color={'#fff'}/>
                        </ResponseButtonStyled>
                    </ResponseActionButtonsContainerStyled>
                    
                </ResponseHeaderStyled>:
                <></> 
            }
            <ResponseStyled id='response'>{generateResponse()}</ResponseStyled>
        </ResponseContainerStyled>
    );
}

export default Response;