import React from 'react';
import { BoxesContainerStyled } from '../styles/Home';
import { ContainerStyled, PageHeaderStyled, PageSubTitleStyled } from '../styles/Main';
import Box from './Box';
import { useNavigate } from 'react-router-dom'

function Home({tabs, setActiveTab}) {
    const navigate = useNavigate();

    const handleBoxClick = (item) => {
        setActiveTab(item.id)
        navigate('/assistant');
    }

    const createBoxes = () => {
        return tabs.map((b, i) => (
            <Box key={i} onClick={handleBoxClick} box={b} />
        ))
    }
    return (
        <ContainerStyled>
            <PageHeaderStyled>Create New</PageHeaderStyled>
            <PageSubTitleStyled>Select content for assistant to generate</PageSubTitleStyled>
            <BoxesContainerStyled>
                {createBoxes()}
            </BoxesContainerStyled>
        </ContainerStyled>
    );
}

export default Home;