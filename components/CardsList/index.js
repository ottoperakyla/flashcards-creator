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

export default ({cards, flipped, setFlipped, setQuizRunning, editCard, deleteCard}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Title>Current terms</Title>
      {cards.length > 0 ? (
      <div>
      <CardsListContainer>
        {cards.map((props, idx) => {
          const isFlipped = flipped.includes(props.term)
          return <Card key={idx} idx={idx} {...props} deleteCard={deleteCard} editCard={editCard} flipped={flipped} isFlipped={isFlipped} setFlipped={setFlipped} />
        })}
      </CardsListContainer>
      <Button onClick={() => setQuizRunning(true)}>Start quiz</Button>
      </div>
      ) : (
        <div>No terms yet. Add some with the form below!</div>
      )}
    </div>
  )
}
