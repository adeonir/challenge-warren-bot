import styled from 'styled-components'

import colors from '../../styles/colors'

export const Header = styled.header`
  align-items: center;
  background: ${colors.primary};
  display: flex;
  padding: 20px 0;
  justify-content: center;

  h1 {
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  }
`
