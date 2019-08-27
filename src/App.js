import React, { useState, useEffect, useReducer } from 'react'

import API from './services/api'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import Footer from './components/Footer'
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
          messages: [
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
          answers: {
            [state.id]: action.payload,
          },
          messages: state.messages.concat({
            owner: 'user',
            text: state.responses,
          }),
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

  const handleClick = e => {
    e.preventDefault()
    dispatch({
      type: 'SEND_USER_DATA',
      payload: userText,
    })

    const { id, answers } = state

    API.post('/conversation/message', {
      context: 'suitability',
      id,
      answers,
    }).then(result => {
      console.log(result.data)
      // dispatch({
      //   type: 'LOAD_CHAT',
      //   payload: result.data,
      // })
    })
  }
  console.log(state)

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
        <Footer>
          <Input
            type='text'
            placeholder='Digite aqui seu nome'
            onChange={e => setUserText(e.target.value)}
          />
          <Button onClick={handleClick}>Enviar</Button>
        </Footer>
      )}
    </>
  )
}

export default App
