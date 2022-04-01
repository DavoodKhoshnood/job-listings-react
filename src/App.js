import React, { useState } from 'react'

import data from './data.json'
import headerBackground from './images/bg-header-desktop.svg'
import LoadImage from './LoadImage'

import './App.css'

function App() {
  const [filteredData, setFilter] = useState(data)
  const catClick = (category) => {
    console.log(category)
    document.getElementById('searchInput').value = category
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
  const addEvent = () =>
    document
      .querySelectorAll('span')
      .forEach((el) =>
        el.addEventListener('click', (e) => catClick(e.target.innerText)),
      )

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={headerBackground} alt="HeaderImage" />
        </header>

        <div className="main">
          <div className="content">
            <input
              id="searchInput"
              className="form-control"
              type="search"
              placeholder="Search..."
              onChange={(e) => filter(e.target.value)}
            />
          </div>
          {filteredData.map((job) => (
            <div className="card">
              <LoadImage alt={job.alt} imgPath={job.logo} />
              <div className="description">
                <p>
                  <span className="sk-1">{job.company}</span>
                  {job.new ? <span className="sk-2">NEW!</span> : ''}
                  {job.featured ? <span className="sk-3">FEATURED</span> : ''}
                </p>
                <p>
                  <span className="sk-title">{job.position}</span>
                  <br />
                </p>
                <p className="bt">
                  <span className="bt">{job.postedAt}</span>
                  <span className="bt">・</span>
                  <span className="bt">{job.contract}</span>
                  <span className="bt">・</span>
                  <span className="bt">{job.location}</span>
                </p>
              </div>
              <div className="lang">
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
      {addEvent()}
    </>
  )
}
export default App
