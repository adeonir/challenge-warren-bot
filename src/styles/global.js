import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html, body, #root {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap');
    background: ${colors.light};
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    vertical-align: baseline;
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
