import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import Input from '../Input'
import Button from '../Button'

const Form = ({ onChange, onClick, state }) => {
  const { id, buttons } = state

  console.log(state)
  return (
    <S.Form>
      <S.Container>
        {id === 'question_name' && (
          <>
            <Input
              type='text'
              placeholder='Digite aqui seu nome'
              onChange={onChange}
            />
            <Button onClick={onClick}>Enviar</Button>
          </>
        )}

        {id === 'question_age' && (
          <>
            <Input
              type='number'
              placeholder='Digite sua idade'
              onChange={onChange}
            />
            <Button onClick={onClick}>Enviar</Button>
          </>
        )}

        {id === 'question_interest' && (
          <>
            {buttons.map(button => (
              <Button
                onClick={() => onClick(button.value, button.label.title)}
                key={`button-${button.value}`.toString()}
                value={button.value}>
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
  onClick: PropTypes.func.isRequired,
  state: PropTypes.shape({
    id: PropTypes.string,
    buttons: PropTypes.array,
  }).isRequired,
}

export default Form
