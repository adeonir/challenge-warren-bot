import styled from 'styled-components'
import { lighten } from 'polished'

import colors from '../../styles/colors'

export const Input = styled.input`
  border: 0;
  background: ${colors.white};
  border-radius: 5px;
  color: ${colors.black};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  height: 70px;
  display: flex;
  padding: 0 30px;

  &::placeholder {
    color: ${lighten(0.5, colors.black)};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
`
