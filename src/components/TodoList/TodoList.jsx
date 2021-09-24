import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

import './TodoList.css'

const TodoList = (props) => {
  const { todoList, setTodoList } = props

  const handleRemoveItem = (id) => {
    const temp = [...todoList]
    temp.splice(id, 1)
    setTodoList(temp)
  }

  return todoList.length > 0 ? (
    <div className="block_todo_list">
      {todoList.map((item, idx) => (
        <TodoItem
          item={item}
          idx={idx}
          key={`${item.value}${item.time}${idx}`}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  ) : (
    <></>
  )
}

export default TodoList
