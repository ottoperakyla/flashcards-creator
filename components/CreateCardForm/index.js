import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Label = styled.label`
  display: block;
`

export default () => {
  const [form, setValues] = useState({
    term: '',
    answer: '',
    correctAnswer: 0,
    answers: []
  })

  const updateField = ({target: {id, value}}) => {
    setValues({
      ...form,
      [id]: value
    })
  }

  const addAnswer = e => {
    e.preventDefault()
    setValues({
      ...form,
      answer: '',
      answers: form.answers.concat(form.answer)
    })
  }

  const setCorrectAnswer = idx => {
    setValues({
      ...form,
      correctAnswer: idx
    })
  }

  const deleteAnswer = idx => {
    setValues({
      ...form,
      answers: form.answers.filter((_, i) => i !== idx)
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return ( 
    <div>
      <h2>Create new term</h2>
      <form onSubmit={onSubmit}>
        <Label htmlFor="term">Term
          <input value={form.term} onChange={updateField} type="text" id="term" />
        </Label>
        <Label htmlFor="answer">Add answer
          <input value={form.answer} onChange={updateField} type="text" id="answer" />
          <Button onClick={addAnswer}>Add answer</Button>
        </Label>
        <div>
          {form.answers.map((answer, idx) => {
            const id = `correct_${idx}`
            return (
              <div key={id}>
                {answer}
                <Label htmlFor={id}>Is correct?
                  <input checked={idx === form.correctAnswer} onChange={() => setCorrectAnswer(idx)} type="radio" id={id} />
                </Label>
                <Button onClick={() => deleteAnswer(idx)}>Delete</Button>
              </div>
            )
          })}
        </div>
        <Button>Add term</Button>
      </form>
    </div>
  )
}