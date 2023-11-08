import React from "react"


const ServiceCard = ({ headingColor, bgColor, Title, Info,Img }) => {
  return (
    <div className={` md:min-w-[25rem] min-w-[22rem] w-[22rem] bg-orange-100  py-[4rem]  px-6 relative shadow-md hover:shadow-xl overflow-hidden `}>
   
   
     <div className=" rotate-45 w-[80px] h-[80px] absolute  right-0 top-0 " >
        <img src={Img} alt="" />
        
     </div>
      <div className="h-[9rem] flex items-center z-20 ">
        <h5 className={`text-5xl text-orange-400 my-3 text-start `}>
          {Title}
        </h5>
      </div>
      <p className="mt-10 text-orange-400 text-lg font-medium  z-20">{Info}</p>
    </div>
  )
}

export default ServiceCard
