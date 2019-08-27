import styled from 'styled-components'
import { rgba } from 'polished'

import colors from '../../styles/colors'

export const Header = styled.header`
  align-items: center;
  background: ${colors.primary};
  box-shadow: 0px 2px 8px ${rgba(colors.black, 0.15)};
  display: flex;
  justify-content: center;
  left: 0;
  padding: 20px 0;
  position: fixed;
  right: 0;
  top: 0;

  h1 {
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
  }
`
