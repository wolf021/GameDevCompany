import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-400 px-7 text-lg  hover:px-9 hover:bg-[#676da4b1] duration-700 py-2 w-max rounded-xl text-white  ' onClick={()=>props.onClick} >
        {props.children}
    </button>
  )
}

export default Button