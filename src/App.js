import './App.css'
import data from './data.json'
import HeaderBackground from './images/bg-header-desktop.svg'
import LoadImage from './LoadImage'

console.log(data)
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={HeaderBackground} alt="HeaderImage" />
        </header>
        <div className="main">
          {data.map((job) => (
            <div className="card">
              <LoadImage alt={job.alt} imgPath={job.logo} />
              <div className="description">
                <p>
                  <span className="sk-1">{job.company}</span>
                  {job.new?<span className="sk-2">NEW!</span>:''}
                  {job.featured?<span className="sk-3">FEATURED</span>:''}
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
                {job.languages.map(lan =>
                  <span>{lan}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
