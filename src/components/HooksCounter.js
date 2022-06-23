import userEvent from '@testing-library/user-event'
import React, { Fragment, useState } from 'react'
import styles from './CommonStyleSheet.module.css'
import Form from './Form'
const HooksCounter = () => {
  const [enteredAge, setEnteredAge] = useState('')
  const [enteredName, setEnteredName] = useState('')

  const [user, setUser] = useState([])

  const [error, setError] = useState()
  // always initialize the useState variable wioth empty quotes, or else warning shows up.

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log(enteredName)
    // console.log(enteredAge)

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // handle error
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

      //   props.onValidInput(enteredName, enteredAge) // call to App.js

      setUser((prevState) => {
        return [
          ...prevState,
          { name: enteredName, age: enteredAge, id: Math.random() },
        ]
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
        <div className={`${styles.split} ${styles.right}`}>
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

export default HooksCounter
