import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import { Spotify } from './spotify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <LandingPage />
    
    </div>
  )
}

export default App
