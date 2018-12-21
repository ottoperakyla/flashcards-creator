import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Label = styled.label`
  display: block;
`

export default () => {
  return (
    <div>
      <form>
        <Label htmlFor="term">Term
          <input type="text" id="term" />
        </Label>
        <h4>Answers</h4>
        <Label htmlFor="answers">
          <input type="text" id="answers" />
          <Button>Add answer</Button>
        </Label>
      </form>
    </div>
  )
}