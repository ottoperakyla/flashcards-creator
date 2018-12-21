import React from 'react'
import styled from 'styled-components'
import Card from '../Card'

const CardsListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Title = styled.h2`
  text-align: center;
`

const Button = styled.button`
  background-color: lightblue;
  outline: 0;
  border: 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-weight:bold;
  text-transform:uppercase;
  margin: 1rem 0;
  color: white;

  &:hover {
    color: black;
  }
`

export default ({cards, selectCard, selectedCard, setQuizRunning}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Title>Current Cards</Title>
      <CardsListContainer>
        {cards.map((props, idx) => 
          <Card key={idx} {...props} selectedCard={selectedCard} selectCard={selectCard} />
        )}
      </CardsListContainer>
      <Button onClick={() => setQuizRunning(true)}>Start quiz</Button>
    </div>
  )
}
