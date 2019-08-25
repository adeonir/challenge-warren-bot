import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ children }) => {
  return (
    <S.Button type='submit' props>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
