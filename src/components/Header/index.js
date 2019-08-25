import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Header = ({ children }) => {
  return (
    <S.Header>
      <h1>{children}</h1>
    </S.Header>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Header
