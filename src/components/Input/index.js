import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Input = ({ type, placeholder }) => {
  return <S.Input type={type} placeholder={placeholder} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input
