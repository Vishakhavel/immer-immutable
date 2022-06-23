import React, { Fragment, useState } from 'react'
import styles from './CommonStyleSheet.module.css'
import Form from './Form'
const HooksList = () => {
  const [enteredAge, setEnteredAge] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [user, setUser] = useState([])
  const [error, setError] = useState()
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // handle error
      setError({
        title: 'Invalid Input',
        message: 'Please fill in Name/Age input fields!',
      })

      alert('invalid input!')
    } else if (+enteredAge < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter Age > 0',
      })
    } else {
      setEnteredAge('')
      setEnteredName('')
      setUser((prevState) => {
        return [
          ...prevState,
          { name: enteredName, age: enteredAge, id: Math.random().toString() },
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

  //   const handleErrorConfirm = () => {
  //     setError(null)
  //   }

  return (
    <Fragment>
      <div className={`${styles.split} ${styles.right}`}>
        <div>
          <h1 className={styles.rightHeader}>useState</h1>

          <Form
            enteredName={enteredName}
            enteredAge={enteredAge}
            //   handleErrorConfirm={handleErrorConfirm}
            handleFormSubmit={handleFormSubmit}
            handleInputAge={handleInputAge}
            handleInputName={handleInputName}
          />
          <ul>
            {user.map((user) => (
              <li key={user.id}>
                {user.name} - {user.age} years old
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default HooksList
