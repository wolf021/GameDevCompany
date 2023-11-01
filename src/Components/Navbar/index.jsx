
import Button from '../Button'
import React, { useEffect, useState } from 'react';
import GameBitLogo from '../../assets/icons/GameBit.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
   
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
          
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  


  return (
    <div className={`flex md:px-3  font-bold justify-between h-[3rem] pr-8  md:h-[4rem] items-center   z-30 ${scrolling? "bg-white  text-black border-b-2 duration-300 sticky top-0  ": "bg-transparent text-white duration-300 fixed "} w-full `} >  
        <div className='w-max' >
            <img className='md:w-[120px] w-[90px]  ' src={GameBitLogo} alt="" />
        </div>
        <div className='md:flex hidden  justify-between md:items-center md:w-[40%]  ' >

        <ul className='flex w-[60%] justify-between ' >
           
            <li>Services</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
            <Button>Contact Us</Button>
        </div>
        <div className='md:hidden visible' >
        <FontAwesomeIcon className='text-orange-400' icon={faBars} size='2x' />
        </div>
    </div>
  )
}

export default Navbar