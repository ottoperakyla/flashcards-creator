import React from 'react'
import  { create } from 'react-test-renderer'
import {render, fireEvent} from 'react-testing-library'
import CardsList from '../components/CardsList'

test('snapshot (empty cards)', () => {
  const testCards = []
  const flipped = []
  const element = create(<CardsList flipped={flipped} cards={testCards} />)
  expect(element.toJSON()).toMatchSnapshot()
})

test('snapshot (with cards, one flipped)', () => {
  const testCards = [
    {term: "lollero", definition: "nope"}, 
    {term: "test2", definition: "yep"}
  ]
  const flipped = ['lollero']
  const element = create(<CardsList flipped={flipped} cards={testCards} />)
  expect(element.toJSON()).toMatchSnapshot()
})

test('snapshot (with cards, nothing flipped)', () => {
  const testCards = [
    {term: "lollero", definition: "nope"}, 
    {term: "test2", definition: "yep"}
  ]
  const flipped = []
  const element = create(<CardsList flipped={flipped} cards={testCards} />)
  expect(element.toJSON()).toMatchSnapshot()
})

// test('flips card when clicking on card', () => {
//   const testCards = [
//     {term: "lollero", definition: "nope"}, 
//     {term: "test2", definition: "yep"}
//   ]
//   const flipped = []
//   const {container} = render(<CardsList setFlipped={() => null} flipped={flipped} cards={testCards} />)
//   const firstCard = container.querySelector('.test')
//   console.log(firstCard.style)
//   fireEvent.click(firstCard)
//   console.log(firstCard.style)
// })