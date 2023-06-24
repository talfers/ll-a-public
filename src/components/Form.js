import React, { useContext, useState } from 'react';
import plans from '../data/plans';
import { Context as TaskContext } from '../context/TaskContext';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import ProgressBar from './ProgressBar';
import { SectionContainerStyled, SectionsContainerStyled, FormContainerStyled, FormNavContainerStyled } from '../styles/Form';
import { PrimaryButtonStyled, SecondaryButtonStyled } from '../styles/Button';
import Input from './Input';
import { ModalBackgroundStyled } from '../styles/Main';
import Loading from './Loading';
import Products from './Products';


function Form(props) {
    const { user } = useAuth()
    const { checkout } = usePayments()
    const {postTaskData, incrementStep, decrementStep, resetResponse, updateLoading} = useContext(TaskContext);
    const [showPlans, setShowPlans] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState(plans[0].prices.priceId);
    const [loading, setLoading] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(props.subscription?.status==='active') {
            resetResponse(props.tab.id)
            const elem = document.getElementById("response");
            updateLoading(props.tab.id, true)
            elem.scrollIntoView();
            try {
                await postTaskData(props.tab);
                elem.scrollIntoView();
            } catch (err) {
                setError(err.message)
                console.log(err.message);
            }
        } else {
            setShowPlans(1);
        }
    }

    const loadCheckout = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(1)
        try {
            await checkout(selectedPlan, user.uid, '/', '/' )
        } catch (err) {
            setLoading(0)
            const errorCode = err.code;
            const errorMessage = err.message;
            setError(errorMessage)
            alert(error)
            console.log(errorCode, errorMessage);
        }
    }

    const createInputs = () => {
        return Object.keys(props.tab.inputs)[props.tab.step] in props.tab.inputs?
        <SectionContainerStyled>
            {
                
                    Object.keys(props.tab.inputs[Object.keys(props.tab.inputs)[props.tab.step]]).map((inputName) => (
                        <Input 
                            key={inputName} 
                            input={props.tab.inputs[Object.keys(props.tab.inputs)[props.tab.step]][inputName]} 
                            tab={props.tab.id} 
                            section={Object.keys(props.tab.inputs)[props.tab.step]}
                            name={inputName}
                        />
                    ))
                
            }
        </SectionContainerStyled>:
        <></>  
    }

    return (
        <FormContainerStyled>
            {
                loading?
                <Loading message={"Loading..."}/>
                :null
            }
            
            {
                showPlans===1?
                <ModalBackgroundStyled>
                    <Products
                    plans={plans} 
                    setShowPlans={setShowPlans} 
                    selectedPlan={selectedPlan} 
                    setSelectedPlan={setSelectedPlan}
                    onContinue={loadCheckout}
                    continueText={'Continue to Pay'}
                    />
                </ModalBackgroundStyled>
                :
                null
            } 
            {
                Object.keys(props.tab.inputs).length>1?<ProgressBar steps={Object.keys(props.tab.inputs)} step={props.tab.step}/>:<></> 
            }
            <form>
                <SectionsContainerStyled>
                    {createInputs()}
                </SectionsContainerStyled>
                {
                    props.tab.step === Object.keys(props.tab.inputs).length-1?
                    <FormNavContainerStyled>
                        {
                            Object.keys(props.tab.inputs).length > 1?
                            <SecondaryButtonStyled onClick={() => decrementStep(props.tab.id, props.tab.step)}>Back</SecondaryButtonStyled>:
                            <></>
                        }
                        
                        <PrimaryButtonStyled onClick={handleSubmit} id={props.tab.shortName}>{props.tab.submitMessage}</PrimaryButtonStyled>
                    </FormNavContainerStyled>:
                    <FormNavContainerStyled>
                        {
                            props.tab.step>0?
                            <SecondaryButtonStyled onClick={() => decrementStep(props.tab.id, props.tab.step)}>Back</SecondaryButtonStyled>:
                            <></> 
                        }
                        {   props.tab.step===0?
                            <PrimaryButtonStyled onClick={() => incrementStep(props.tab.id, props.tab.step)}>Start</PrimaryButtonStyled>:
                            <PrimaryButtonStyled onClick={() => incrementStep(props.tab.id, props.tab.step)}>Next</PrimaryButtonStyled>
                        }
                    </FormNavContainerStyled>
                    
                }
            </form>
        </FormContainerStyled>
    );
}

export default Form