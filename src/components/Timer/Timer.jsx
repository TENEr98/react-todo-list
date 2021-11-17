import React, { useEffect } from 'react'

const Timer = ({ min, sec, setTodoList, idx, todoList, isCountingDown }) => {
  const tick = () => {
    if (isCountingDown === false) return
    const temp = [...todoList]
    if (temp[idx].min === 0 && temp[idx].sec === 0) {
      temp[idx].isCountingDown = false
    } else if (temp[idx].sec === 0) {
      temp[idx].min = temp[idx].min - 1
      temp[idx].sec = 59
    } else {
      temp[idx].sec = temp[idx].sec - 1
    }
    setTodoList(temp)
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <div>
      {min == 0 && sec === 0 ? (
        <span>Time is up </span>
      ) : (
        <span>
          {min} : {sec}
        </span>
      )}
    </div>
  )
}

export default Timer
