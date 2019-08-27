import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Input = ({ type, placeholder, onChange }) => {
  return <S.Input type={type} placeholder={placeholder} onChange={onChange} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
