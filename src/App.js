import React from 'react'

// import API from './services/api'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import Chat from './components/Chat'
import Footer from './components/Footer'

import Input from './components/Input'
import Button from './components/Button'

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
      <Chat />
      <Footer>
        <Input type='text' placeholder='Digite aqui seu nome' />
        <Button>Enviar</Button>
      </Footer>
    </>
  )
}

export default App
