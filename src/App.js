import React, { useState, useEffect, useReducer } from 'react'

import API from './services/api'

import GlobalStyles from './styles/global'
import Header from './components/Header'
import Chat from './components/Chat'
import Footer from './components/Footer'

import Messages from './components/Messages'
import Input from './components/Input'
import Button from './components/Button'

// const conversation = [
//   {
//     owner: 'bot',
//     text: [
//       'Oi, eu sou o Warren. ^1000 Se você quer começar a investir bem e de maneira fácil, ^500 veio ao lugar certo. ^1000 Eu vou te ajudar.',
//       'Antes de começarmos, ^500 como posso te chamar?',
//     ],
//   },
//   {
//     owner: 'user',
//     text: ['Meu nome é Adeonir'],
//   },
//   {
//     owner: 'bot',
//     text: [
//       'Prazer, Adeonir. ^1000 Para ajudar você a ter os melhores rendimentos, ^500 preciso descobrir o seu perfil de investidor, ^500 então farei algumas perguntas rápidas. ^1000',
//     ],
//   },
// ]

function App() {
  const messagesReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_CHAT':
        return state.concat({
          owner: 'bot',
          text: action.text,
        })
      default:
        throw new Error()
    }
  }

  const [conversation, dispatch] = useReducer(messagesReducer, [])

  useEffect(() => {
    const fetchData = () => {
      API.post('/conversation/message', {
        context: 'suitability',
      }).then(result => {
        const { messages } = result.data
        dispatch({
          type: 'LOAD_CHAT',
          text: messages.map(message => message.value),
        })
      })
    }

    fetchData()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header>Fale com o Warren</Header>
      <Chat>
        {conversation.map((message, index) => (
          <Messages key={`message-${index}`.toString()} messages={message} />
        ))}
      </Chat>
      <Footer>
        <Input type='text' placeholder='Digite aqui seu nome' />
        <Button>Enviar</Button>
      </Footer>
    </>
  )
}

export default App
