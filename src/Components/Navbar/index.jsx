
import Button from '../Button'
import React, { useEffect, useState } from 'react';
import GameBitLogo from '../../assets/BrandLogo.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars,faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {OurServicesLinks} from "../../../DataConfig/Data"
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    const [scrolling, setScrolling] = useState(false);
    const [hamburger, setHamburder] = useState(false);
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);

    
   

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
          
        } else if(window.scrollY <100){
        setHamburder(false)
        setScrolling(false);

        }
         else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed

    

  // Function to toggle the main dropdown visibility
  const toggleHamburger = () => {
    setHamburder(!hamburger);
  };

  // Function to toggle the services dropdown visibility
  const toggleServicesDropdown = () => {
    setServicesDropdownVisible(!servicesDropdownVisible);
  };

  return (
    <div className={`flex md:px-3  font-bold justify-between h-[3rem] pr-8  md:h-[4rem] items-center   z-30 ${scrolling || hamburger ? "bg-white  text-black border-b-2 duration-300 sticky top-0  ": "bg-transparent text-white duration-300 fixed "}            w-full `} >  
    <Link to="/" >
        <div className='w-max' >
            <img className='md:w-[65px] w-[65px]  ' src={GameBitLogo} alt="" />
        </div>
        </Link>
        <div className={`md:flex justify-between md:items-center md:w-[40%] ${isMobile ? 'hidden' : ''}`}>
        <ul className='flex w-[60%] justify-between ' >
           
            <li>
              <Link href="/">

            Home
              </Link>
            </li>
            <li className='relative group cursor-pointer hover:text-orange-400 transition duration-300 '>
              <p className=' inline-flex items-center gap-1'   onClick={toggleServicesDropdown}>

              Services
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
              </p>
              <ul className={`absolute w-max space-y-3 top-[3rem] bg-white border-2  shadow-2xl p-4 box-border text-black rounded  ${servicesDropdownVisible? "block z-20" : "hidden" } transition duration-500 ease-in-out`}>
              {
                OurServicesLinks.map((serviceLink)=>(
                  <li>
                  <Link className='hover:text-orange-400' to={serviceLink.link}>
    
                  {serviceLink.title}
                  </Link>
                  </li>
                ))
              }
              </ul>
            </li>
            
            <li> <Link to="/about-us" >About</Link> </li>
        </ul>
        <a href='#form-section' >

            <Button>Contact Us</Button>
        </a>
        </div>
        <div className='md:hidden visible relative' >
        <FontAwesomeIcon onClick={()=>setHamburder(!hamburger)} className='text-orange-400' icon={faBars} size='2x' />

        </div>
        <ul
          className={`absolute w-full space-y-2 border-t-2 text-xl border-slate-600 py-5 px-3 bg-white text-orange-400 top-full transition-all ${
            hamburger ? 'opacity-100 translate-y-0 duration-500' : 'opacity-0 translate-y-[-10px] duration-500'
          }`}
        >
          <li className='border-b py-2 border-orange-400' >
            <Link to="/" > Home</Link>
           
            </li>
          <li
          className={`border-b py-2 border-orange-400 ${servicesDropdownVisible ? 'text-orange-400' : ''}`}
         
        >
          <p  onClick={toggleServicesDropdown}>

          Services <span> <FontAwesomeIcon icon={faAngleDown} /> </span>
          </p>
          <ul
            className={`pl-4 space-y-2 transition-max-h duration-500 ${
              servicesDropdownVisible ? 'h-full py-1' : 'max-h-0 hidden'
            }`}
          >
            <Link to="/game-development" >
            <li className='border-b  py-2 border-orange-400' >Ios Game Developemnt</li>
            </Link>
            <Link to="/web-app-development">
            
            <li className='border-b  py-2 border-orange-400' >Web Development</li>
            </Link>
            <Link to="/web-app-development">
            
            <li className='border-b  py-2 border-orange-400' >App Development</li>
            </Link>
           
            
            
          </ul>
        </li>
          <li className='border-b  py-2 border-orange-400' >Contact</li>
          <li className=' py-2' >About Us</li>
      
        </ul>
    </div>
  )
}

export default Navbar