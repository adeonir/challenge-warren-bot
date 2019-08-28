import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import Input from '../Input'
import Button from '../Button'

const Form = ({ onChange, onSubmit, state }) => {
  const { id, inputs, buttons } = state
  const [placeholder, setPlaceholder] = useState({})

  useEffect(() => {
    switch (id) {
      case 'question_name':
        return setPlaceholder({
          text: 'Digite aqui seu nome',
          type: 'text',
        })
      case 'question_age':
        return setPlaceholder({
          text: 'Qual sua idade',
          type: 'number',
        })
      case 'question_income':
        return setPlaceholder({
          text: 'Informe sua renda',
          type: 'number',
        })
      case 'question_email':
        return setPlaceholder({
          text: 'Me passe seu email',
          type: 'email',
        })
      default:
        return setPlaceholder({
          text: '',
          type: 'text',
        })
    }
  }, [id])

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Container>
        {inputs.length > 0 && (
          <>
            <Input
              type={placeholder.type}
              placeholder={placeholder.text}
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
