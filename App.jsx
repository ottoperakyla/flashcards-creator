import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import CardsList from './components/CardsList'
import CreateCardForm from './components/CreateCardForm'
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'
import {shuffle} from './util'

const Container = styled.div`
  max-width: 700px;
  margin: auto;
` 
 
const localData = JSON.parse(localStorage.getItem('data') || '{}')

export default () => {
  const url = history.state && history.state.url
  const [cards, setCards] = useState(localData.cards || [])
  const [quizRunning, setQuizRunning] = useState(url === 'quiz')
  const [flipped, setFlipped] = useState([])
  const [cardToEdit, setCardToEdit] = useState(null)

  const addNewCard = card => {
    const newCards = cards.concat(card)
    setCards(newCards)
    localStorage.setItem('data', JSON.stringify({cards: newCards}))
  }

  const deleteCard = idx => {
    const newCards = cards.filter((_, i) => i !== idx)
    setCards(newCards)
    localStorage.setItem('data', JSON.stringify({cards: newCards}))
  }

  // TODO: this does not work. Problem with local form state?
  const editCard = idx => {
    const cardToEdit = cards.find((_, i) => i === idx)
    setCardToEdit(cardToEdit)
  }

  return (
    <Container>
      <Header />
      {quizRunning 
        ? <Quiz {...{cards: shuffle(cards), setQuizRunning}} /> 
        : <div>
            <CardsList {...{cards, flipped, setFlipped, setQuizRunning, deleteCard, editCard}} />
            <CreateCardForm {...{addNewCard, cardToEdit}}/>
          </div>
      }
      <Footer />
    </Container>
  )
}
