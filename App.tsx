import React, {useState} from 'react'
import CardsList from './components/CardsList'
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'

const localData = JSON.parse(localStorage.getItem('data') || '{}')

export default () => {
  const {cards} = localData
  const [selectedCard, selectCard] = useState(null)
  const [quizRunning, setQuizRunning] = useState(false)

  return (
    <div>
      <Header />
      {quizRunning 
        ? <Quiz {...{cards, setQuizRunning}} /> 
        : <CardsList {...{cards, selectCard, selectedCard, setQuizRunning}} />
      }
      {selectedCard && <p>Currently selected card: {selectedCard}</p>}
      <Footer />
    </div>
  )
}
