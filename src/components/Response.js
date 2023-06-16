import React from 'react';
import { useSnack } from '../hooks/useSnack';
import { useDownloadFile } from "../hooks/useDownloadFile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconWrapper } from '../styles/Main';
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
    const [snack, showSnack] = useSnack()
    const [downloadFile] = useDownloadFile()

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
                    {snack!==''?<CopySnack $size={snack.includes('Downloaded')?172:96}><FontAwesomeIcon icon={faCheck} size={"lg"} color={'green'}/>{snack}</CopySnack>:<></>}
                    <ResponseActionButtonsContainerStyled>
                        <ResponseButtonStyled onClick={() => {
                            navigator.clipboard.writeText(props.tab.response)
                            showSnack('Copied!')}}>
                            <FontAwesomeIconWrapper $theme={'light'}>
                                <FontAwesomeIcon icon={faCopy} size={"lg"} color={'inherit'}/>
                            </FontAwesomeIconWrapper>
                        </ResponseButtonStyled>
                        <ResponseButtonStyled onClick={() => {
                            downloadFile('docx', 'response', props.tab.shortName)
                            showSnack('Doc Downloaded!')}}>
                            <FontAwesomeIconWrapper $theme={'light'}>
                                <FontAwesomeIcon icon={faFileWord} size={"lg"} color={'inherit'}/>
                            </FontAwesomeIconWrapper> 
                        </ResponseButtonStyled>
                        <ResponseButtonStyled onClick={() => {
                            downloadFile('pdf', 'response', props.tab.shortName)
                            showSnack('PDF Downloaded!')}}>
                            <FontAwesomeIconWrapper $theme={'light'}>
                                <FontAwesomeIcon icon={faFilePdf} size={"lg"} color={'inherit'}/>
                            </FontAwesomeIconWrapper>
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