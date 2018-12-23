import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Label = styled.label`
  display: block;
`

const TextInput = styled.input`
  padding: 0.25rem 0;
  margin: 0 0.25rem;
`

export default ({addNewCard, cardToEdit}) => {
  const initialValues = {
    term: cardToEdit ? cardToEdit.term : '',
    answer: '',
    correctAnswer: 0,
    answers: []
  }
  console.log(cardToEdit, initialValues)
  
  const [form, setValues] = useState(initialValues)

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
    setValues(initialValues)
    const {term, answers} = form
    const answersFormatted = answers.map((answer, idx) => ({
      answer,
      correct: idx === form.correctAnswer
    }))
    addNewCard({term, answers: answersFormatted})
  }
  
  return ( 
    <div>
      <h2>Create new term</h2>
      <form onSubmit={onSubmit}>
        <Label htmlFor="term">Term
          <TextInput value={form.term} onChange={updateField} type="text" id="term" />
        </Label>
        <Label htmlFor="answer">Add answer
          <TextInput value={form.answer} onChange={updateField} type="text" id="answer" />
          <Button onClick={addAnswer}>Add answer</Button>
        </Label>
        {form.answers.length > 0 && (
        <table>
          <tbody>
          <tr>
            <th>Answer</th>
            <th>Correct?</th>
            <th>Actions</th>
          </tr>
          {form.answers.map((answer, idx) => {
            const id = `correct_${idx}`
            return (
              <tr key={id}>
                <td>{answer}</td>
                <td>
                  <input checked={idx === form.correctAnswer} onChange={() => setCorrectAnswer(idx)} type="radio" id={id} />
                </td>
                <td><Button onClick={() => deleteAnswer(idx)}>Delete</Button></td>
              </tr>
            )
          })}
          </tbody>
        </table>
        )}
        <Button>Add term</Button>
      </form>
    </div>
  )
}