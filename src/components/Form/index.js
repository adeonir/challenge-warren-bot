import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import Input from '../Input'
import Button from '../Button'

const Form = ({ onChange, onSubmit, state }) => {
  const { id, inputs, buttons } = state
  const [placeholder, setPlaceholder] = useState('')

  useEffect(() => {
    switch (id) {
      case 'question_name':
        return setPlaceholder('Digite aqui seu nome')
      case 'question_age':
        return setPlaceholder('Digite sua idade')
      case 'question_income':
          return setPlaceholder('Digite sua renda')
      case 'question_email':
          return setPlaceholder('Digite seu email')
      default:
        return setPlaceholder('')
    }
  }, [id])

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Container>
        {inputs.length > 0 && (
          <>
            <Input
              type='text'
              placeholder={placeholder}
              onChange={onChange}
              required
            />
            <Button>Enviar</Button>
          </>
        )}

        {buttons.length > 0 && (
          <>
            {buttons.map(button => (
              <Button
                key={button.value}
                value={button.value}
                name={button.value}>
                {button.label.title}
              </Button>
            ))}
          </>
        )}
      </S.Container>
    </S.Form>
  )
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    id: PropTypes.string,
    inputs: PropTypes.array,
    buttons: PropTypes.array,
  }).isRequired,
}

export default Form
