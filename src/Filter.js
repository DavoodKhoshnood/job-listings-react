import React, { useState } from 'react'

const Filter = (props) => {
    const clearFilter = () => {
        console.log('eee')
    }
  return (
    <div id="filter-bar" className="filter general-card">
      <a href={()=> clearFilter()} alt="clear">clear</a>
    </div>
  )
}

export default Filter
