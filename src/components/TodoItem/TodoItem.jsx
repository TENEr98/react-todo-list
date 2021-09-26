import React from 'react'

import './TodoItem.css'

const TodoItem = (props) => {
  const {
    item,
    editValue,
    handleRemoveItem,
    handleEditItem,
    handleSaveItem,
    handleCancelItem,
    handleEditValue,
    handleCompleteItem,
    idx
  } = props
  return (
    <div className="block__todo_item">
      <div className="content__todo_item">
        {item.status !== 'edit' ? (
          <>
            <input
              type="checkbox"
              name={item.value}
              id={`${item.time}${idx}`}
              className="checkox__todo_item"
              onChange={(e) => handleCompleteItem(e, idx)}
            />
            <label htmlFor={`${item.time}${idx}`} className="label__value_time">
              <span
                className={`label__value ${
                  item.status === 'complete' && 'label__complete'
                }`}
              >
                {item.value}
              </span>
              <span className="label__time">{item.time}</span>
            </label>
          </>
        ) : (
          <input
            type="text"
            className="edit_value__todo_item"
            name={item.value}
            value={editValue}
            onChange={handleEditValue}
          />
        )}
        <div className="actions__todo_item">
          {item.status !== 'edit' ? (
            <>
              <button
                className="edit__todo_item"
                onClick={() => handleEditItem(idx)}
              >
                ✎
              </button>

              <button
                className="remove__todo_item"
                onClick={() => handleRemoveItem(idx)}
              >
                ×
              </button>
            </>
          ) : (
            <>
              <button
                className="save__todo_item"
                onClick={() => handleSaveItem(idx)}
              >
                💾
              </button>
              <button
                className="cancel__todo_item"
                onClick={() => handleCancelItem(idx)}
              >
                ❌
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoItem
