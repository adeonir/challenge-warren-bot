import styled from 'styled-components'
import { rgba } from 'polished'

import colors from '../../styles/colors'

export const Messages = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: flex-start;
`

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  align-self: flex-start;
  background: ${colors.white};
  box-shadow: 0px 2px 8px ${rgba(colors.black, 0.15)};
  margin-bottom: 15px;
  padding: 15px 20px;

  border-radius: 20px;
  ${({ owner }) =>
    owner ? `border-top-left-radius: 2px` : `border-top-right-radius: 2px`};
`
