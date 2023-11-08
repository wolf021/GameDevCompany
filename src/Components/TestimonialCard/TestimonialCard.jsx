import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {} from '@fortawesome/free-regular-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const TestimonialCard = ({Name, Info,Image,Rating}) => {
  return (
    <div className=" flex flex-col items-center space-y-4 my-3 border w-full p-8 text-center rounded-xl hover:bg-orange-200 min-w-[20rem] " id='Testimonial-card' >
       <div className=' bg-orange-400 w-[90px] h-[90px] flex justify-around overflow-hidden rounded-full' >
        <img className='h-[100%] w-full object-fit ' src={Image} alt="" />
       </div>
       <div className='space-y-2'>
        <p className='text-xl font-medium text-slate-600 ' >{Name}</p>
        <p className=' text-orange-400 text-xl '>Rating <span className=' text-slate-600  font-semibold ' >{Rating}</span> </p>
        
        <p className=' text-slate-600 ' > <span><FontAwesomeIcon className='text-orange-400'  icon={faQuoteLeft} /></span> {Info}  <span><FontAwesomeIcon className='text-orange-400' icon={faQuoteRight} /></span> </p>
        
       </div>
    </div>
  )
}

export default TestimonialCard