import userEvent from '@testing-library/user-event'
import React, { Fragment, useState } from 'react'
import styles from './CommonStyleSheet.module.css'
import Form from './Form'
import { useImmer } from 'use-immer'
const ImmutableCounter = () => {
  const [enteredAge, setEnteredAge] = useImmer('')
  const [enteredName, setEnteredName] = useImmer('')
  const [error, setError] = useImmer()
  const [user, setUser] = useImmer([])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // handling error
      setError({
        title: 'Invalid Input',
        message: 'Please fill in Name/Age input fields!',
      })
    } else if (+enteredAge < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter Age > 0',
      })
    } else {
      setEnteredAge('')
      setEnteredName('')

      setUser((draftState) => {
        draftState.push({ name: enteredName, age: enteredAge, id: Math.random })
      })

      console.log(user)
    }
  }

  const handleInputName = (event) => {
    setEnteredName(event.target.value)
  }

  const handleInputAge = (event) => {
    setEnteredAge(event.target.value)
  }

  const handleErrorConfirm = () => {
    setError(null)
  }

  return (
    <Fragment>
      <Fragment>
        <div className={`${styles.split} ${styles.left}`}>
          <div>
            <h2>Todo list using useState for state management</h2>

            <Form
              enteredName={enteredAge}
              enteredAge={enteredAge}
              handleErrorConfirm={handleErrorConfirm}
              handleFormSubmit={handleFormSubmit}
              handleInputAge={handleInputAge}
              handleInputName={handleInputName}
            />
            <p>
              <ul>
                {user.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.age} years old
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </Fragment>
    </Fragment>
  )
}

export default ImmutableCounter
