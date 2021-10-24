import React, { useState, useEffect } from 'react'
import formatDistance from 'date-fns/formatDistance'
import AddItem from './components/AddItem/AddItem'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import Footer from './components/Footer/Footer'
import { mapperDiffTime } from './utils/mapperDiffTime'

import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [amountItems, setAmountItems] = useState(0)
  const [filter, setFilter] = useState('all')

  const createItem = (value) => {
    const temp = [...todoList]
    if (temp.length !== 0) {
      mapperDiffTime(temp)
    }
    temp.unshift({
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime(),
      diffTime: formatDistance(new Date(), new Date(), {
        includeSeconds: true
      }),
      value,
      status: 'active'
    })
    setTodoList(temp)
  }

  const renderList = (filter) => {
    const temp = [...todoList]
    if (filter !== 'all') {
      const filtered = temp.filter((item) => item.status === filter)
      return filtered
    } else {
      return temp
    }
  }

  const handleClear = () => {
    const temp = todoList.filter((item) => item.status !== 'complete')
    setTodoList(temp)
  }

  const handleFilter = (filter) => setFilter(filter)

  useEffect(() => {
    const temp = [...todoList]
    const amount = temp.filter((item) => item.status === 'active').length
    setAmountItems(amount)
  }, [todoList])

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <AddItem createItem={createItem} />
        <TodoList
          todoList={todoList}
          renderList={renderList}
          filter={filter}
          setTodoList={setTodoList}
        />
        <Footer
          handleFilter={handleFilter}
          filter={filter}
          handleClear={handleClear}
          amountItems={amountItems}
        />
      </div>
    </div>
  )
}

export default App
