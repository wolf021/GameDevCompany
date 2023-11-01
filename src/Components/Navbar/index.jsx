
import Button from '../Button'
import React, { useEffect, useState } from 'react';
import GameBitLogo from '../../assets/icons/GameBit.png'

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
    <div className={`flex md:px-3 text-white font-bold justify-between  h-[8vh] items-center sticky top-0  z-30 ${scrolling? "bg-white  text-black border-b-2 duration-300  ": "bg-transparent text-white duration-300 "} w-full `} >  
        <div className='w-[150px]' >
            <img src={GameBitLogo} alt="" />
        </div>
        <div className='md:flex hidden  justify-between md:items-center md:w-[40%]  ' >

        <ul className='flex w-[60%] justify-between ' >
           
            <li>Services</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
            <Button>Contact Us</Button>
        </div>
    </div>
  )
}

export default Navbar