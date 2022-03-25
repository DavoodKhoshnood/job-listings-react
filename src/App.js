import './App.css'
import  HeaderBackground from './images/bg-header-desktop.svg'
import cardImage from './images/myhome.svg';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
         <img src={HeaderBackground} alt= 'Header image' />
      </header>
      <div className='main'>
        <div className='card'>
          <img src={cardImage} alt='image' />
          <div className='description'>
            <span className='sk-1'>Photosnap</span>
            <span className='sk-2'>NEW!</span>
            <span className='sk-3'>FEATURED</span><br/> 
            <span className='sk-title'>Senior Frontend Developer</span><br/> 
            <span className='bt'>Id ago</span>
            <span className='bt'>.</span>
            <span className='bt'>Full Time</span>
            <span className='bt'>.</span>
            <span className='bt'>USA only</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
