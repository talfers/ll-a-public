import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.colors.ff};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.tabs__button:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.activeColor};
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.4s ease-in-out;
    -webkit-transition: visibility 0s, opacity 0.4s ease-in-out;
    -ms-transition: visibility 0s, opacity 0.4s ease-in-out;
}



`