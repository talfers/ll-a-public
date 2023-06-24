import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeImage, ThemeToggleBall, ThemeToggleContainer, ThemeIcons } from '../styles/Nav';


function ThemeToggle(props) {
  return (
    <ThemeToggleContainer
      onClick={() => {
        props.onClick()
      }}
    >
      <ThemeIcons>
        <ThemeImage><FontAwesomeIcon icon={faMoon} size={"sm"} color={'inherit'} /></ThemeImage>
        <ThemeImage><FontAwesomeIcon icon={faSun} size={"sm"} color={'inherit'} /></ThemeImage>
      </ThemeIcons>
      <ThemeToggleBall />
    </ThemeToggleContainer>
  )
}

export default ThemeToggle;