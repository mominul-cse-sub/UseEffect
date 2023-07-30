import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import MyComponentClass from './components/MyComponentClass'

function App() {
  const [show,setShow] = useState(true);
  return (
    <div>
      <h1>Md. Mominul Islam</h1>
      <div>{show && <MyComponent/> }</div>
      <p>
        <button type='button' onClick={()=>setShow((preState)=> !preState)}> {show ? "Hide Post" : "Show Post"} </button>
      </p>
    </div>
  )
}

export default App
