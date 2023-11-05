import React from 'react'

const Form = () => {
  return (
    <div id='form-container' className='bg-slate-800 flex space-x-[4rem]  items-center   h-max  ' >
    <div className='w-[50%] h-[600px] relative  '>
        <img className='w-full h-[100%] ' src={FormImg} alt=""  />
        <div className='absolute top-1/2 px-10 w-[80%]  text-white font-semibold text-4xl  ' >
            
            <p className=' font-semibold text-4xl  text-slate-100 ' ><span className='text-orange-400' >Contact us </span>Today and Get<span className='text-orange-400' > Started</span>  With Us</p>
        </div>
    </div>
    <div  >
        
    
<form className="grid grid-cols-2 h-max   gap-4">
  <div className="mb-4">
    <label className='text-orange-400 font-semibold text-2xl   ' for="name" >Name:</label>
    <input type="text" id="name" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-lg  outline-orange-400"/>
  </div>

  <div className="mb-4">
    <label className='text-orange-400 font-semibold text-2xl ' for="email" >Email:</label>
    <input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg outline-orange-400"/>
  </div>

  <div className="mb-4 col-span-2">
    <label className='text-orange-400 font-semibold text-2xl ' for="phone" >Phone Number:</label>
    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-lg outline-orange-400"/>
  </div>

  <div className="mb-4  col-span-2">
    <label  className='text-orange-400 mb-4 font-semibold text-2xl ' for="message" >Message:</label>
    <textarea id="message" name="message" placeholder="Enter your Query Here . We will Get Back To You" className="w-full h-40 px-3 py-2 border rounded-lg outline-orange-400 resize-none"></textarea>
  </div>

  <Button type="submit" >Submit</Button>
</form>
</div>


</div>
  )
}

export default Form