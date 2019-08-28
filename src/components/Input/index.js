import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Input = ({ type, placeholder, onChange }) => {
  return <S.Input type={type} placeholder={placeholder} onChange={onChange} />
}

Input.defaultProps = {
  type: '',
  placeholder: '',
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Input
