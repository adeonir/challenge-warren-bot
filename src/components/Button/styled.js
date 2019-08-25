import styled from 'styled-components'

import colors from '../../styles/colors'

export const Button = styled.button`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 30px;
  color: ${colors.white};
  display: flex;
  font-size: 18px;
  font-weight: 400;
  height: 60px;
  justify-content: center;
  letter-spacing: 0.2em;
  min-width: 250px;
  text-align: center;
  text-transform: uppercase;
`
