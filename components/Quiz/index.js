import React, {useEffect} from 'react'
import styled from 'styled-components'
import {shuffle} from '../../util'

const QuizCardsContainer = styled.div`
  display: flex;
`

const QuizCard = styled.div`
  flex: 1;
`

export default ({cards}) => { 
  useEffect(() => {
    history.pushState({url: 'quiz'}, null, 'quiz')
  })

  const shuffledCards = shuffle(cards)
  const activeCard = shuffledCards[0]

  return (
    <QuizCardsContainer>
      <QuizCard>
        <h4>{activeCard.term}</h4>
        <p>TODO: display possible answers here</p>
        <p>TODO: When user has selected answer, show if its correct and then show button to move to next card</p>
      </QuizCard>
    </QuizCardsContainer>
  )
}