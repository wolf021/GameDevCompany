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

function App() {
  

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  
  <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
