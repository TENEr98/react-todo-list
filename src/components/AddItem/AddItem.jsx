import React, { useState } from 'react'
import './AddItem.css'

const AddItem = (props) => {
  const [inputValue, setInputValue] = useState('')
  const { handleTodoList } = props

  const handleInputValue = ({ target: { value } }) => setInputValue(value)

  const createItem = (e) => {
    if (e.keyCode === 13) {
      handleTodoList(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="block__todo_add">
      <input
        type="text"
        className="input__todo_input"
        placeholder="What needs to be done?"
        onChange={handleInputValue}
        onKeyUp={createItem}
        value={inputValue}
        autoFocus
      />
    </div>
  )
}

export default AddItem
