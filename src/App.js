import React, { useState, useEffect, useReducer } from 'react'

import API from './services/api'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import Form from './components/Form'
import Chat from './components/Chat'
import Messages from './components/Messages'

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

  const [userText, setUserText] = useState({})

  const stateReducer = (state, action) => {
    switch (action.type) {
      case 'API_LOAD':
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
          answers: action.payload.answers,
          messages: [
            ...state.messages,
            {
              owner: 'user',
              text: action.payload.text,
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
          type: 'API_LOAD',
          payload: result.data,
        })
      })
    }

    fetchData()
  }, [])

  const handleChange = event => {
    setUserText({
      messageText: event.target.value,
      answerText: event.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { id } = state

    const payload = {
      id,
      answers: {
        ...state.answers,
        [state.id]: userText.answerText,
      },
      text: [userText.messageText],
    }

    dispatch({
      type: 'SEND_USER_DATA',
      payload,
    })

    const { answers } = payload

    if (id === 'finish') {
      API.post('/suitability/finish', {
        answers,
      }).then(result => {
        console.log(result.data)
        return result.data
      })
    }

    API.post('/conversation/message', {
      context: 'suitability',
      id,
      answers,
    }).then(result => {
      dispatch({
        type: 'API_LOAD',
        payload: result.data,
      })
      setUserText('')
    })
  }

  return (
    <>
      <GlobalStyles />
      <Header>Fale com o Warren</Header>
      <Chat>
        {state.messages &&
          state.messages.map((message, index) => (
            <Messages key={index} messages={message} answers={state.answers} />
          ))}
      </Chat>
      {(state.inputs || state.buttons) && (
        <Form onSubmit={handleSubmit} onChange={handleChange} state={state} />
      )}
    </>
  )
}

export default App
