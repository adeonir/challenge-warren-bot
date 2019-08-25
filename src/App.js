import React from 'react'

// import API from './services/api'
import GlobalStyles from './styles/global'
import Header from './components/Header'

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
      <section />
    </>
  )
}

export default App
