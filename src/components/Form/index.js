import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Form = ({ children, onSubmit }) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Container>{children}</S.Container>
    </S.Form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form
