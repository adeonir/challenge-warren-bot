import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap');
    font-family: 'Montserrat', sans-serif;
  }

  html, body, #root {
    background: ${colors.light};
    font-size: 100%;
    vertical-align: baseline;
    min-width: 320px;
  }

  #root {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }

  *, *::before, *::after {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
  }
`

export default GlobalStyles
