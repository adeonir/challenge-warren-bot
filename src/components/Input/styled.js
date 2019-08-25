import styled from 'styled-components'
import { lighten } from 'polished'

import colors from '../../styles/colors'

export const Input = styled.input`
  background: ${colors.light};
  border-radius: 5px;
  border: 2px solid transparent;
  color: ${colors.black};
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  height: 60px;
  margin-right: 30px;
  padding: 0 30px;
  transition: border 0.3s ease;
  width: 100%;

  &::placeholder {
    color: ${lighten(0.5, colors.black)};
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    border: 2px solid ${colors.dark};
  }
`
