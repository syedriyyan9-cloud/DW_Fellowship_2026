import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  let red = () => {
    setColor('red')
  }
  let green = () => {
    setColor('green')
  }
  let orange = () => {
    setColor('orange')
  }
  let white = () => {
    setColor('white')
  }
  let blue = () => {
    setColor('blue')
  }

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor : color}}>
        <button onClick={red} className='bg-red-500 text-white font-bold py-2 px-4 rounded'>red</button>
        <button onClick={green} className='bg-green-500 text-white font-bold py-2 px-4 rounded'>green</button>
        <button onClick={orange} className='bg-orange-500 text-white font-bold py-2 px-4 rounded'>orange</button>
        <button onClick={blue} className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>blue</button>
        <button onClick={white} className='bg-white-500 text-white font-bold py-2 px-4 rounded'>white</button>
      </div>
    </>
  )
}

export default App
