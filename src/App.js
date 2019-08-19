import React, { useState, useEffect } from 'react'

import API from './services/api'

function App() {
  const [id, setId] = useState([])
  const [messages, setMessages] = useState([])
  const [responses, setResponses] = useState([])
  const [inputs, setInputs] = useState([])
  const [string, setString] = useState('')

  const [textAnswers, setTextAnswers] = useState([])
  const answers = {}

  useEffect(() => {
    const fetchData = async () => {
      await API.post('/conversation/message', {
        context: 'suitability',
      }).then(result => {
        setId(result.data.id)
        setMessages(result.data.messages)
        setResponses(result.data.responses)
        setInputs(result.data.inputs)
      })
    }

    fetchData()
  }, [])

  console.log(id)
  console.log(messages)
  console.log(responses)
  console.log(inputs)

  return (
    <>
      <header>
        <h1>Fale com o Warren</h1>
      </header>
      <section />
    </>
  )
}

export default App
