import React from 'react'
import  { create } from 'react-test-renderer'
import Button from '../components/Button'

test('snapshot', () => {
  const element = create(<Button />)
  expect(element.toJSON()).toMatchSnapshot()
})