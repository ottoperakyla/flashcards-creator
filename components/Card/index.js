import React, {useState} from 'react'
import styled from 'styled-components'

const FlipCard = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 300px;
  height: 100px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
`

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const FlipCardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FlipCardFront = styled(FlipCardSide)`
  background-color: #bbb;
  color: black;
`

const FlipCardBack = styled(FlipCardSide)`
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`

export default ({term, definition, setFlipped, flipped}) => {
  return (
    <FlipCard onClick={() => setFlipped(term)}>
      <FlipCardInner style={{transform: flipped === term && 'rotateY(180deg)'}}>
        <FlipCardFront>
          <p>{term}</p>
        </FlipCardFront>
        <FlipCardBack>
          <p>{definition}</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  )
}
