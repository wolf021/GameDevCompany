import React from 'react'
import Lottie from 'lottie-react'
import LoaderIcon from '../../assets/Loader2.json'

const Loader = () => {
  return (
    <div className='h-[100vh] flex justify-around items-center ' >

    <div className='w-[200px] h-[200px]' >
        <Lottie animationData={LoaderIcon} />
       
    </div>
    </div>
  )
}

export default Loader