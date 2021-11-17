import React from 'react'
import Timer from '../Timer/Timer'

import './TodoItem.css'

const TodoItem = ({
  item,
  editValue,
  setTodoList,
  todoList,
  handleRemoveItem,
  handleEditItem,
  handleSaveItem,
  handleCancelItem,
  handleEditValue,
  handleCompleteItem,
  handleResumeItem,
  idx
}) => {
  return (
    <li className="block__todo_item">
      <div className="content__todo_item">
        {item.status !== 'edit' ? (
          <div className="block_label__value_time">
            <label
              htmlFor={`${item.task}-${idx}`}
              className="label__value_time"
            >
              <input
                type="checkbox"
                name={item.value}
                id={`${item.task}-${idx}`}
                className="checkbox__todo_item"
                onChange={(e) => handleCompleteItem(e, idx)}
              />
              <span className="fake__checkbox"></span>
              <span
                className={`label__value ${
                  item.status === 'complete' && 'label__complete'
                }`}
              >
                {item.task}
              </span>
            </label>
            <div className="block__value_time">
              {!item.isCountingDown ? (
                <button
                  className="button__todo_item resume"
                  title="play/resume"
                  onClick={() => handleResumeItem(idx, item.isCountingDown)}
                >
                  ▶️
                </button>
              ) : (
                <button
                  className="button__todo_item pause"
                  title="pause"
                  onClick={() => handleResumeItem(idx, item.isCountingDown)}
                >
                  ⏸
                </button>
              )}

              <Timer
                isCountingDown={item.isCountingDown}
                setTodoList={setTodoList}
                todoList={todoList}
                min={item.min}
                sec={item.sec}
                idx={idx}
              />
              <span className="label__time">{item.diffTime}</span>
            </div>
          </div>
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
                title="edit"
              >
                ✎
              </button>

              <button
                className="remove__todo_item"
                onClick={() => handleRemoveItem(idx)}
                title="remove"
              >
                ×
              </button>
            </>
          ) : (
            <>
              <button
                className="save__todo_item"
                onClick={() => handleSaveItem(idx)}
                title="save"
              >
                💾
              </button>
              <button
                className="cancel__todo_item"
                onClick={() => handleCancelItem(idx)}
                title="cancel"
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
