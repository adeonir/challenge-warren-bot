import React from 'react'

// import API from './services/api'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import Chat from './components/Chat'
import Footer from './components/Footer'

import Messages from './components/Messages'
import Input from './components/Input'
import Button from './components/Button'

const conversation = [
  {
    owner: 'bot',
    text: [
      'Oi, eu sou o Warren. ^1000 Se você quer começar a investir bem e de maneira fácil, ^500 veio ao lugar certo. ^1000 Eu vou te ajudar.',
      'Antes de começarmos, ^500 como posso te chamar?',
    ],
  },
  {
    owner: 'user',
    text: ['Meu nome é {{answers.question_name}}'],
  },
  {
    owner: 'bot',
    text: ['Prazer, Adeonir'],
  },
]

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await API.post('/conversation/message', {
  //       context: 'suitability',
  //     }).then(result => {
  //       console.log(result.data)
  //     })
  //   }

  //   fetchData()
  // }, [])

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
