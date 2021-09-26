import React, { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import AddItem from './components/AddItem/AddItem'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import Footer from './components/Footer/Footer'

import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [tempTodoList, setTempTodoList] = useState([])
  const [amountItems, setAmountItems] = useState(0)
  const [filter, setFilter] = useState('all')

  const handleTodoList = (value) => {
    setFilter('all')
    const temp = [...tempTodoList]
    temp.push({
      time: formatDistanceToNow(Date.now(), { includeSeconds: true }),
      value,
      status: 'active'
    })
    setTempTodoList(temp)
    setTodoList(temp)
  }

  const handleFilter = (type) => {
    setFilter(type)
  }

  const handleClear = () => {
    const temp = tempTodoList.filter((item) => item.status !== 'complete')
    setTodoList(temp)
    setTempTodoList(temp)
  }

  useEffect(() => {
    console.log({ 'temp': tempTodoList }, { 'dym': todoList })
    const temp = [...tempTodoList]
    if (filter === 'all') setTodoList([...temp])
    else setTodoList([...temp.filter((item) => item.status === filter)])
  }, [filter])

  useEffect(() => {
    const temp = [...tempTodoList]
    const amount = temp.filter((item) => item.status === 'active').length
    setAmountItems(amount)
  }, [tempTodoList])

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <AddItem handleTodoList={handleTodoList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          setTempTodoList={setTempTodoList}
        />
        <Footer
          amountItems={amountItems}
          filter={filter}
          handleFilter={handleFilter}
          handleClear={handleClear}
        />
      </div>
    </div>
  )
}

export default App
