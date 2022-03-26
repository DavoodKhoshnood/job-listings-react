import './App.css'
import HeaderBackground from './images/bg-header-desktop.svg'
import cardImage from './images/myhome.svg'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={HeaderBackground} alt="Header image" />
        </header>
        <div className="main">
          <div className="card">
            <img src={cardImage} alt="image" />
            <div className="description">
              <p>
                <span className="sk-1">Photosnap</span>
                <span className="sk-2">NEW!</span>
                <span className="sk-3">FEATURED</span>
              </p>
              <p>
                <span className="sk-title">Senior Frontend Developer</span>
                <br />
              </p>
              <p className="bt">
                <span className="bt">Id ago</span>
                <span className="bt">・</span>
                <span className="bt">Full Time</span>
                <span className="bt">・</span>
                <span className="bt">USA only</span>
              </p>
            </div>
            <div className="lang">
              <span>Frontend</span>
              <span>Senior</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
