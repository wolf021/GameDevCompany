import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <div className='' >
    <Navbar/>
  <HomePage/>
  <Footer/>
    </div>
    </>
  )
}

export default App
