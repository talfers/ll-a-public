import React from 'react';
import { ContainerStyled, HomeHeaderStyled, BoxesContainerStyled, BoxSubTitleStyled } from '../styles/Home';
import Box from './Box';

function Home({tabs}) {
    const createBoxes = () => {
        return tabs.map(b => (
            <Box box={b} />
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