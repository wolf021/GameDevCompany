import React from 'react'

const Card = ({cardImg,title,description}) => {
  return (
    <div id='card' className='md:w-[20rem] md:min-w-[20rem] min-w-full m-2 flex flex-col items-center space-y-4 border-1 shadow-lg hover:border-0 rounded-2xl p-6 py-14 text-center hover:shadow-2xl duration-500 bg-white ' >
        <div>
            <img src={cardImg} alt="" />
        </div>
        <div className='text-orange-400 font-semibold text-xl ' >{title}</div>
        <p>{description}</p>
    </div>
  )
}

export default Card