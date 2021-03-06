import React, { Fragment } from 'react'
import styles from './CommonStyleSheet.module.css'
const Form = (props) => {
  return (
    <Fragment>
      <div className={styles.formBox}>
        {' '}
        <form onSubmit={props.handleFormSubmit}>
          <label htmlFor='user'>Add name: </label>
          <input
            id='user'
            onChange={props.handleInputName}
            value={props.enteredName}
            type='text'
            className={styles.nameInput}
          />
          <br />
          <label htmlFor='age'>Add Age: </label>
          <input
            id='age'
            onChange={props.handleInputAge}
            value={props.enteredAge}
            type='number'
            className={styles.ageInput}
          />
          <br />
          <button className={styles.submitButton} type='submit'>
            Add User
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default Form
