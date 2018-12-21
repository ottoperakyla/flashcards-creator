import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: hotpink;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #888;
  border-bottom: 4px solid;
  padding-bottom: 0.25rem;
  cursor: pointer;

  &:hover {
    text-shadow: 1px 1px 1px #000;  
  }
`

export default () => {
  return (
    <div>
      <Title onClick={() => {
        history.pushState({url: '/'}, null, '/')
        location.reload() // fix routing
      }}>
        Flashcards Creator-o-matic 6000
      </Title>
    </div> 
  )
}