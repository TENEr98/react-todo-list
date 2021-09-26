import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

import './TodoList.css'

const TodoList = (props) => {
  const { todoList, setTodoList, setTempTodoList } = props
  const [editValue, setEditValue] = useState('')

  const handleEditItem = (id) => {
    const temp = [...todoList]
    temp[id].status = 'edit'
    setEditValue(temp[id].value)
    setTodoList(temp)
    setTempTodoList(temp)
  }

  const handleSaveItem = (id) => {
    if (editValue.length < 1) return
    const temp = [...todoList]
    temp[id].value = editValue
    temp[id].status = 'active'
    setEditValue('')
    setTodoList(temp)
    setTempTodoList(temp)
  }

  const handleRemoveItem = (id) => {
    const temp = [...todoList]
    temp.splice(id, 1)
    setTodoList(temp)
    setTempTodoList(temp)
  }

  const handleCancelItem = (id) => {
    const temp = [...todoList]
    temp[id].value = todoList[id].value
    temp[id].status = 'active'
    setEditValue('')
    setTodoList(temp)
    setTempTodoList(temp)
  }

  const handleCompleteItem = ({ target: { checked } }, id) => {
    if (checked) {
      const temp = [...todoList]
      temp[id].status = 'complete'
      setTodoList(temp)
      setTempTodoList(temp)
    } else {
      const temp = [...todoList]
      temp[id].status = 'active'
      setTodoList(temp)
      setTempTodoList(temp)
    }
  }

  const handleEditValue = ({ target: { value } }) => setEditValue(value)

  return (
    todoList.length > 0 && (
      <div className="block_todo_list">
        {todoList.map((item, idx) => (
          <TodoItem
            item={item}
            idx={idx}
            editValue={editValue}
            key={`${item.value}${item.time}${idx}`}
            handleRemoveItem={handleRemoveItem}
            handleEditItem={handleEditItem}
            handleSaveItem={handleSaveItem}
            handleCancelItem={handleCancelItem}
            handleEditValue={handleEditValue}
            handleCompleteItem={handleCompleteItem}
          />
        ))}
      </div>
    )
  )
}

export default TodoList
