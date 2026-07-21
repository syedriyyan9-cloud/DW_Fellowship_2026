// import { useState } from 'react'
// import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tours from './components/Tours/Tours.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <><Navbar/><Home/></>
    },
    {
      path:'/tours',
      element: <><Navbar/><Tours/></>
    },
    {
      path:'/gallery',
      element: <><Navbar/><Gallery/></>
    },
    {
      path:'/about',
      element: <><Navbar/><About/></>
    },
    {
      path:'/contact',
      element: <><Navbar/><Contact/></>
    },
  ]
)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
