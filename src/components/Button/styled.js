import styled from 'styled-components'
import { lighten } from 'polished'

import colors from '../../styles/colors'

export const Button = styled.button`
  align-items: center;
  background: ${colors.primary};
  border-radius: 25px;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.2em;
  padding: 0 50px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${lighten(0.1, colors.primary)};
  }
`
