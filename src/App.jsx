import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import ErrorPage from './Pages/ErrorPage'
import ScrollToTop from './Helpers/ScrollTopTop'
import GameDevelopmentPage from './Pages/GameDevelopmentPage'
import WebDevelopmentPage from './Pages/WebDevelopmentPage'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'aos/dist/aos.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <div className="fixed  rounded-full  animate-pulse border-orange-400 bottom-14   right-4 z-10  w-max " >
          <a href="https://wa.me/message/2RFBFUTBCJUIL1">

          <FontAwesomeIcon size="3x" className="text-green-400" icon={faWhatsapp} />
          </a>

        </div> 
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>} />
      <Route path='/amazon-game-development' element={<GameDevelopmentPage/>} />
      <Route path='/game-development' element={<GameDevelopmentPage/>} />
      <Route path='/ios-game-development' element={<GameDevelopmentPage/>} />
      <Route path='/web-app-development' element={<WebDevelopmentPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  
  <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
