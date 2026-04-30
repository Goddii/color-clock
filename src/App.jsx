import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='app-container'>
      <h1> Color Clock</h1>
      <p> The current time is: {new Date().toLocaleTimeString()} </p>
      <p> The current date is: {new Date().toLocaleDateString()}</p>

    </div>
    
  )
}

export default App
