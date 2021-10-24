import React from 'react'

import './TodoItem.css'

const TodoItem = ({
  item,
  editValue,
  handleRemoveItem,
  handleEditItem,
  handleSaveItem,
  handleCancelItem,
  handleEditValue,
  handleCompleteItem,
  idx
}) => {
  return (
    <li className="block__todo_item">
      <div className="content__todo_item">
        {item.status !== 'edit' ? (
          <label className="label__value_time">
            <input
              type="checkbox"
              name={item.value}
              className="checkbox__todo_item"
              onChange={(e) => handleCompleteItem(e, idx)}
            />
            <span className="fake__checkbox"></span>
            <div className="block__value_time">
              <span
                className={`label__value ${
                  item.status === 'complete' && 'label__complete'
                }`}
              >
                {item.value}
              </span>
              <span className="label__time">{item.diffTime}</span>
            </div>
          </label>
        ) : (
          <input
            type="text"
            className="edit_value__todo_item"
            name={item.value}
            value={editValue}
            onChange={handleEditValue}
            onKeyUp={(e) => e.keyCode === 13 && handleSaveItem(idx)}
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
    </li>
  )
}

export default TodoItem
