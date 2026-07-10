import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let increase = () =>{
    if(count < 20){
      count++
      setCount(count)
    }
  }

  let decrease = () => {
    if (count > 0){
      count--
      setCount(count)
    }
  }

  return (
    <>
      <h1>counter app</h1>
      <h2>counter: {count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
