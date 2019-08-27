import React, { useState, useEffect, useReducer } from 'react'

import API from './services/api'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import Form from './components/Form'
import Chat from './components/Chat'
import Messages from './components/Messages'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const initialState = {
    id: '',
    messages: [
      {
        owner: '',
        text: [],
      },
    ],
    buttons: null,
    inputs: null,
    responses: [],
    answers: {},
  }

  const [userText, setUserText] = useState('')

  const stateReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_CHAT':
        return {
          ...state,
          id: action.payload.id,
          answers: { ...state.answers },
          messages: [
            ...state.messages,
            {
              owner: 'bot',
              text: action.payload.messages.map(message => message.value),
            },
          ],
          buttons: action.payload.buttons,
          inputs: action.payload.inputs,
          responses: action.payload.responses,
        }
      case 'SEND_USER_DATA':
        return {
          ...state,
          answers: { ...state.answers, answers: action.payload.answers },
          messages: [
            ...state.messages,
            {
              owner: 'user',
              text: action.payload.responses,
            },
          ],
          buttons: null,
          inputs: null,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    const fetchData = () => {
      API.post('/conversation/message', {
        context: 'suitability',
      }).then(result => {
        dispatch({
          type: 'LOAD_CHAT',
          payload: result.data,
        })
      })
    }

    fetchData()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    const { id } = state

    const payload = {
      id,
      answers: {
        [state.id]: userText,
      },
      responses: [state.responses[0].replace(/{{.+}}/g, userText)],
    }

    dispatch({
      type: 'SEND_USER_DATA',
      payload,
    })

    const { answers } = payload

    API.post('/conversation/message', {
      context: 'suitability',
      id,
      answers,
    }).then(result => {
      dispatch({
        type: 'LOAD_CHAT',
        payload: result.data,
      })
    })
  }

  return (
    <>
      <GlobalStyles />
      <Header>Fale com o Warren</Header>
      <Chat>
        {state.messages &&
          state.messages.map((message, index) => (
            <Messages key={`message-${index}`.toString()} messages={message} />
          ))}
      </Chat>
      {state.inputs && (
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Digite aqui seu nome'
            onChange={e => setUserText(e.target.value)}
          />
          <Button>Enviar</Button>
        </Form>
      )}
    </>
  )
}

export default App
