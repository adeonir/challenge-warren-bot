import styled from 'styled-components'
import { lighten, rgba } from 'polished'
import media from 'styled-media-query'

import colors from '../../styles/colors'

export const Footer = styled.footer`
  background: ${colors.white};
  box-shadow: 0px 2px 8px ${rgba(colors.black, 0.15)};
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-around;
  max-width: 960px;

  ${media.lessThan('600px')`
    flex-direction: column;
  `}
`

export const Button = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  background: ${colors.primary};
  border-radius: 25px;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-family: 'Montserrat', sans-serif;
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

  ${media.lessThan('600px')`
    &:last-child {
      margin-top: 20px;
    }
  `}
`
