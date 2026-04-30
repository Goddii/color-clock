import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [click, setIsClicked] = useState(false)


  useEffect(() => {

    if(click){
      document.body.classList.add('theme-one')
      document.body.classList.remove('theme-two')
    } else {
      document.body.classList.add('theme-two')
      document.body.classList.remove('theme-one')
      
    }


  },[click])

  return (
   

    <div className='app-container'>
       

      <div className='clock-logo'>
        <i className="bi bi-clock-fill"></i>
      </div>
      <h1> Color Clock</h1>
      <p> The current time is: {new Date().toLocaleTimeString()} </p>
      <p> The current date is: {new Date().toLocaleDateString()}</p>

      <button onClick={() =>setIsClicked(!click)}
      style={{
        border: "none",
        padding: "10px 20px",
        backgroundColor: "grey"
      }}  
      >
        Toggle Theme
      </button>
    </div>
    
  )
}

export default App
