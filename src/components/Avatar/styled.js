import styled from 'styled-components'

export const Avatar = styled.span`
  display: block;
  width: 48px;
  ${({ bot }) => (bot ? `margin-right: 20px` : `margin-left: 20px`)};
`
