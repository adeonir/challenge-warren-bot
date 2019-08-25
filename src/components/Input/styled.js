import styled from 'styled-components'
import { lighten } from 'polished'

import colors from '../../styles/colors'

export const Input = styled.input`
  background: ${colors.light};
  border-radius: 5px;
  border: 0;
  color: ${colors.black};
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  height: 70px;
  padding: 0 30px;

  &::placeholder {
    color: ${lighten(0.5, colors.black)};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
`
