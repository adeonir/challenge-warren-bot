import styled from 'styled-components'
import { rgba } from 'polished'
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
