import styled from 'styled-components'

import colors from '../../styles/colors'

export const Header = styled.header`
  align-items: center;
  background: ${colors.primary};
  display: flex;
  height: 100px;
  justify-content: center;

  h1 {
    color: ${colors.white};
    font-weight: 800;
  }
`
