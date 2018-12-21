import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Button from '../Button'

const CardsListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Title = styled.h2`
  text-align: center;
`

export default ({cards, setQuizRunning}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Title>Current Cards</Title>
      <CardsListContainer>
        {cards.map((props, idx) => 
          <Card key={idx} {...props} />
        )}
      </CardsListContainer>
      <Button onClick={() => setQuizRunning(true)}>Start quiz</Button>
    </div>
  )
}
