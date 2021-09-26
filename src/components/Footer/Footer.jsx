import React from 'react'

import './Footer.css'

const Footer = (props) => {
  const { amountItems, filter, handleFilter, handleClear } = props
  return (
    <div className="block__todo_footer">
      <span className="amount__todo_footer">{amountItems} items left</span>
      <div>
        <button
          className={`filter__todo_footer ${filter === 'all' && 'selected'} `}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`filter__todo_footer ${filter === 'active' && 'selected'}`}
          onClick={() => handleFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter__todo_footer ${
            filter === 'complete' && 'selected'
          }`}
          onClick={() => handleFilter('complete')}
        >
          Completed
        </button>
      </div>
      <button className="clear__todo_footer" onClick={handleClear}>
        Clear completed
      </button>
    </div>
  )
}

export default Footer
