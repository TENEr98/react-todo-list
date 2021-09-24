import React, { useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import AddItem from './components/AddItem/AddItem'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([])

  const handleTodoList = (value) => {
    const temp = [...todoList]
    temp.push({
      time: formatDistanceToNow(Date.now(), { includeSeconds: true }),
      value,
      isActive: 'active'
    })
    setTodoList(temp)
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <AddItem handleTodoList={handleTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  )
}

export default App
