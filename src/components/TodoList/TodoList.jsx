import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

import './TodoList.css'

const TodoList = ({ todoList, renderList, filter, setTodoList }) => {
  const [editValue, setEditValue] = useState('')

  const handleEditItem = (id) => {
    const temp = [...todoList]
    temp[id].status = 'edit'
    setEditValue(temp[id].value)
    setTodoList(temp)
  }

  const handleSaveItem = (id) => {
    if (editValue.length < 1) return
    const temp = [...todoList]
    temp[id].value = editValue
    temp[id].status = 'active'
    setEditValue('')
    setTodoList(temp)
  }

  const handleRemoveItem = (id) => {
    const temp = [...todoList]
    temp.splice(id, 1)
    setTodoList(temp)
  }

  const handleCancelItem = (id) => {
    const temp = [...todoList]
    temp[id].value = todoList[id].value
    temp[id].status = 'active'
    setEditValue('')
    setTodoList(temp)
  }

  const handleCompleteItem = ({ target: { checked } }, id) => {
    if (checked) {
      const temp = [...todoList]
      temp[id].status = 'complete'
      setTodoList(temp)
    } else {
      const temp = [...todoList]
      temp[id].status = 'active'
      setTodoList(temp)
    }
  }
  const handleEditValue = ({ target: { value } }) => setEditValue(value)

  return (
    todoList.length > 0 && (
      <ul className="block_todo_list">
        {renderList(filter).map((item, idx) => (
          <TodoItem
            key={`${idx}${item.value}`}
            item={item}
            idx={idx}
            editValue={editValue}
            handleEditItem={handleEditItem}
            handleSaveItem={handleSaveItem}
            handleRemoveItem={handleRemoveItem}
            handleCancelItem={handleCancelItem}
            handleEditValue={handleEditValue}
            handleCompleteItem={handleCompleteItem}
          />
        ))}
      </ul>
    )
  )
}

export default TodoList
