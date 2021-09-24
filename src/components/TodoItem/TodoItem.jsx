import React from 'react'

import './TodoItem.css'

const TodoItem = (props) => {
  const { item, handleRemoveItem, idx } = props

  return (
    <div className="block__todo_item">
      <div className="content__todo_item">
        <input
          type="checkbox"
          name={item.value}
          id={item.time}
          className="checkox__todo_item"
        />
        <label htmlFor={item.time} className="label__value_time">
          <span className="label__value">{item.value}</span>
          <span className="label__time">{item.time}</span>
        </label>
        <div className="actions__todo_item">
          <button className="edit__todo_item">✎</button>
          <button
            className="remove__todo_item"
            onClick={() => handleRemoveItem(idx)}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
