import React, { useState, useCallback } from 'react'
import './AddItem.css'

const DEFAULT_FORM = {
  task: '',
  min: '',
  sec: ''
}

const AddItem = ({ createItem }) => {
  const [inputValue, setInputValue] = useState(DEFAULT_FORM)
  const [errorInput, setErrorInput] = useState({})

  const onChangeInput = ({ target: { value, name } }) => {
    if (value.length < 0) return
    let temp = value
    if (name.includes('min') || name.includes('sec')) {
      temp = temp.replace(/\D/g, '')
      setInputValue((prev) => ({
        ...prev,
        [name]: temp
      }))
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: temp
      }))
    }
  }

  const handleTask = ({ keyCode }) => {
    const isPermitted = Object.values(inputValue).every(
      (value) => value.length !== 0
    )
    if (keyCode === 13) {
      Object.entries(inputValue).forEach(([key, value]) => {
        if (value.length === 0) {
          setErrorInput((prev) => ({
            ...prev,
            [key]: 'error'
          }))
        } else {
          setErrorInput((prev) => ({
            ...prev,
            [key]: ''
          }))
        }
      })
      if (isPermitted) {
        createItem(inputValue)
        setInputValue(DEFAULT_FORM)
        setErrorInput({})
      }
    }
  }

  return (
    <div className="wrapper__todo_add">
      <div className="block__todo_add">
        <label name="Task" htmlFor="task" className="label__todo"></label>
        <input
          type="text"
          name="task"
          id="task"
          className={`input__todo_input grow ${errorInput.task && 'error'}`}
          placeholder="Task"
          value={inputValue.task}
          onChange={onChangeInput}
          onKeyUp={handleTask}
          autoFocus
        />
        <label name="Min" className="label__todo" htmlFor="min"></label>
        <input
          type="text"
          className={`input__todo_input  ${errorInput.min && 'error'}`}
          name="min"
          id="min"
          placeholder="Min"
          value={inputValue.min}
          onChange={onChangeInput}
          onKeyUp={handleTask}
          maxLength="3"
        />
        <label name="Sec" className="label__todo" htmlFor="sec"></label>
        <input
          type="text"
          className={`input__todo_input  ${errorInput.sec && 'error'}`}
          name="sec"
          id="sec"
          placeholder="Sec"
          value={inputValue.sec}
          onChange={onChangeInput}
          onKeyUp={handleTask}
          maxLength="2"
        />
      </div>
    </div>
  )
}

export default AddItem
