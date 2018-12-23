import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '../Button'

const QuizCardsContainer = styled.div`
  display: flex;
`

const QuizCard = styled.div`
  flex: 1;
`

export default ({cards}) => { 
  const [index, setIndex] = useState(0)
  const [icon, setIcon] = useState(null)
  const [correctAmount, setCorrectAmount] = useState(0)

  useEffect(() => 
    history.pushState({url: 'quiz'}, null, 'quiz')
  )

  const checkAnswerCorrect = answer => {
    if (answer.correct) {
      setIcon('✅')
      setCorrectAmount(correctAmount + 1)
    } else {
      setIcon('❌')
    }
  }

  const showNextCard = () => {
    setIcon(null)
    setIndex(index + 1)
  }

  const card = cards[index]
  console.log(cards)
  return (
    <QuizCardsContainer>
      <QuizCard>
        <h4>{card.term}</h4>
        <h5>Answers</h5>
        {card.answers.map((answer, idx) => 
          <Button onClick={() => checkAnswerCorrect(answer)} key={idx}>{answer.answer}</Button>
        )}
        {icon && <span>{icon}</span>}
        {icon && index < cards.length - 1 && <Button onClick={showNextCard}>Next card</Button>}
        {icon && index === cards.length - 1 && (
          <p>Quiz done! You got {Math.trunc(correctAmount/cards.length*100)}% correct.</p>
        )}
      </QuizCard>
    </QuizCardsContainer>
  )
}