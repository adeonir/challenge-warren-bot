import React, { useState, useEffect } from 'react'

import API from './services/api'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const loadBot = async () => {
      const response = await API.post('/conversation/message', {
        context: 'suitability',
      })
      setData(response.data)
    }

    loadBot()
  }, [])

  console.log(data)

  return (
    <>
      <header>
        <h1>Fale com o Warren</h1>
      </header>
    </>
  )
}

export default App
