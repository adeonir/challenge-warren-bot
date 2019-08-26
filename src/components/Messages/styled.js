import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import colors from '../../styles/colors'

export const Messages = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  ${({ bot }) =>
    bot ? `justify-content: flex-start` : `justify-content: flex-end`};

  ${({ bot }) =>
    !bot &&
    css`
      span {
        order: 1;
      }
    `};
`

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  align-self: flex-start;
  background: ${colors.white};
  box-shadow: 0px 2px 8px ${rgba(colors.black, 0.15)};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 15px 20px;

  border-radius: 20px;
  ${({ bot }) =>
    bot ? `border-top-left-radius: 2px` : `border-top-right-radius: 2px`};
`
