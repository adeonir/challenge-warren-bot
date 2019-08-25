import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Footer = ({ children }) => {
  return (
    <S.Footer>
      <S.Container>{children}</S.Container>
    </S.Footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
