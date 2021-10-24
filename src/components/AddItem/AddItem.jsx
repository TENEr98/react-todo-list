import React, { useState } from 'react'
import './AddItem.css'

const AddItem = ({ createItem }) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = ({ target: { value } }) => {
    if (value.length < 1) return
    setInputValue(value)
  }

  const handleInput = ({ keyCode }) => {
    if (keyCode === 13 && inputValue.length !== 0) {
      createItem(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="block__todo_add">
      <input
        type="text"
        className="input__todo_input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={onChangeInput}
        onKeyUp={handleInput}
        autoFocus
      />
    </div>
  )
}

export default AddItem
