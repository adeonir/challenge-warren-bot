import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ children, onClick }) => {
  return (
    <S.Button type='submit' onClick={onClick}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
