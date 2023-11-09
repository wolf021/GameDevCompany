import { useState,useEffect } from 'react'
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
import SeoPage from './Pages/SeoPage'
import AboutUsPage from './Pages/AboutUsPage'
import Loader from './Components/Loader/Loader'


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 2000);
  
  
  }, [])
  

  return (
    <>
    {isLoading? <Loader/>: 
    <BrowserRouter>
    <div className="fixed  rounded-full  animate-pulse border-orange-400 bottom-14   right-10 z-  w-max " >
          <a href="https://wa.me/message/2RFBFUTBCJUIL1">

          <FontAwesomeIcon size="3x" className="text-green-400" icon={faWhatsapp} />
          </a>

        </div> 
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>} />
      <Route path='/game-development' element={<GameDevelopmentPage/>} />
      <Route path='/web-app-development' element={<WebDevelopmentPage/>} />
      <Route path='/seo-aso' element={<SeoPage/>} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  
  <Footer/>
    </BrowserRouter>
    }
   
    </>
  )
}

export default App
