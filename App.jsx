import React, {useState} from 'react'
import styled from 'styled-components'
import CardsList from './components/CardsList'
import CreateCardForm from './components/CreateCardForm'
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'

const Container = styled.div`
  max-width: 700px;
  margin: auto;
` 
 
const localData = JSON.parse(localStorage.getItem('data') || '{}')

export default () => {
  const url = history.state && history.state.url
  const {cards} = localData
  const [quizRunning, setQuizRunning] = useState(url === 'quiz')
  const [flipped, setFlipped] = useState([])

  return (
    <Container>
      <Header />
      {quizRunning 
        ? <Quiz {...{cards, setQuizRunning}} /> 
        : <div><CardsList {...{cards, flipped, setFlipped, setQuizRunning}} /><CreateCardForm /></div>
      }
      <Footer />
    </Container>
  )
}
