import React, { useState } from 'react'
import data from './data.json'
import Filter from './Filter'
import './App.css'

function App() {
  const [filteredData, setFilter] = useState(data)
  const filterClick = (category) => {
    console.log(category)
    filter(category)
  }
  const filter = (inputValue) => {
    setFilter(
      data.filter(
        (obj) =>
          obj.company.toLowerCase().includes(inputValue.toLowerCase()) ||
          obj.languages.includes(inputValue) ||
          obj.role.includes(inputValue) ||
          obj.level.includes(inputValue) ||
          (inputValue === 'FEATURED' ? obj.featured : '') ||
          (inputValue === 'NEW!' ? obj.new : ''),
      ),
    )
  }

  return (
    <>
      <div className="App">
        <header></header>
        <div className="main">
        <Filter />
          {filteredData.map((job) => (
            <div className={`card general-card ${job.new && 'bordered'}`}>
              <img src={job.logo} alt={job.alt} />
              <div className="description">
                <div className="first-row">
                  <span className="company">{job.company}</span>
                  {job.new && <span className="new" onClick = {(event) => filterClick(event.target.innerText)}>NEW!</span>}
                  {job.featured && <span className="featured">FEATURED</span>}
                </div>
                <div className="second-row">
                  <span className="position">{job.position}</span>
                </div>
                <div className="third-row">
                  <span className="bt">{job.postedAt}</span>
                  <span className="bt">・</span>
                  <span className="bt">{job.contract}</span>
                  <span className="bt">・</span>
                  <span className="bt">{job.location}</span>
                </div>
              </div>
              <div className="language">
                <span>{job.role}</span>
                <span>{job.level}</span>
                {job.languages.map((lan) => (
                  <span>{lan}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {addEvent()} */}
    </>
  )
}
export default App
