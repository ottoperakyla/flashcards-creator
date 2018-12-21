import React from 'react'
import  { create } from 'react-test-renderer'
import Card from '../components/Card'

test('snapshot', () => {
  const C = create(<Card />)
  expect(C.toJSON()).toMatchSnapshot()
})