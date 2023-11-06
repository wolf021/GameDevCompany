import React from 'react'
import BrandLogo from '../assets/BrandLogo.svg'
 
const ErrorPage = () => {
  return (
        <>
    <div className="bg-slate-700 text-center py-[5rem] ">
        <h3 className="text-2xl font-semibold text-white ">
          Page Not Found{" "}
        </h3>
    </div>
        <div className='text-center flex-col md:flex-row-reverse my-10 items-center flex md:justify-around  ' >
            <img className='w-[]' src={BrandLogo} alt="" />
            <div className=' flex flex-col my-3 text-center space-x-3' > 
            <p className='text-3xl text-slate-500' >Oops</p>

            <p className='text-3xl text-slate-500' >Vist Page From the Given Links</p>
            </div>
        </div>
        </>
  )
}

export default ErrorPage