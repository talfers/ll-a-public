import React from 'react';
import { HomeHeaderStyled, BoxesContainerStyled, BoxSubTitleStyled } from '../styles/Home';
import { ContainerStyled } from '../styles/Main';
import Box from './Box';
import { useNavigate } from 'react-router-dom'

function Home({tabs, setActiveTab}) {
    const navigate = useNavigate();

    const handleBoxClick = (item) => {
        setActiveTab(item.id)
        navigate('/assistant');
    }

    const createBoxes = () => {
        return tabs.map(b => (
            <Box onClick={handleBoxClick} box={b} />
        ))
    }
    return (
        <ContainerStyled>
            <HomeHeaderStyled>Create New</HomeHeaderStyled>
            <BoxSubTitleStyled>Select content for assistant to generate</BoxSubTitleStyled>
            <BoxesContainerStyled>
                {createBoxes()}
            </BoxesContainerStyled>
        </ContainerStyled>
    );
}

export default Home;