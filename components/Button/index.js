import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: lightblue;
  outline: 0;
  border: 0;
  padding: 0.35rem 0.5rem;
  cursor: pointer;
  font-weight:bold;
  text-transform:uppercase;
  margin: 1rem 0.15rem;
  color: white;
  display: inline-block;

  &:hover {
    color: black;
  }
`

export default props => <Button {...props} />
