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



`