import React from 'react'
import  { create } from 'react-test-renderer'
import {render, fireEvent} from 'react-testing-library'
import ReactTestUtils from 'react-dom/test-utils';
import Card from '../components/Card'

test('snapshot', () => {
  const element = create(<Card />)
  expect(element.toJSON()).toMatchSnapshot()
})

test('it flips card when card is clicked', () => {
  const {container} = render(<Card flipped={[]} setFlipped={() => null} />)
  const card = container.querySelector('.test')
  console.log(card.style.transform)
  fireEvent.click(card)
  console.log(card.style.transform)
})
