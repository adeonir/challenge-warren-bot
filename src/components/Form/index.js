import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import Input from '../Input'
import Button from '../Button'

const Form = ({ onChange, onSubmit, state }) => {
  const { id, buttons } = state

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Container>
        {id === 'question_name' && (
          <>
            <Input
              type='text'
              placeholder='Digite aqui seu nome'
              onChange={onChange}
              required
            />
            <Button>Enviar</Button>
          </>
        )}

        {id === 'question_age' && (
          <>
            <Input
              type='number'
              placeholder='Digite sua idade'
              onChange={onChange}
              required
            />
            <Button>Enviar</Button>
          </>
        )}

        {id === 'question_interest' && (
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
    buttons: PropTypes.array,
  }).isRequired,
}

export default Form
