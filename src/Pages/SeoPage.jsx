import React from 'react'
import Button from '../Components/Button'
import WebDevHero from "../assets/webdev-hero-1.jpg"
import Mobile from '../assets/react-native.png'
import WebDev from '../assets/webdev.jpg'
import { WebExperties, asoData,seoData } from "../../DataConfig/Data"
import ServiceCard from '../Components/ServiceCard/ServiceCard'

const SeoPage = () => {
  return (
    <>
        <section className="bg-slate-700 text-center relative ">
          <img className="w-full md:h-[500px]" src={WebDevHero} alt="" />
          <div className="flex justify-center  w-full py-[1.5rem] md:py-[7rem] absolute top-0 bg-slate-800 bg-opacity-50 h-full  ">
            <div className="md:w-[60%]  p-[3rem] rounded-xl  space-y-4">
              <h3 className="md:text-5xl text-3xl text-white font-semibold ">
                {" "}
                
                <span className="text-orange-400"> Seo</span> & <span className="text-orange-400"> Aso</span> Services
              </h3>
              <p className="text-white">
               We Provide Best Ranking Services For Games and Website.
              </p>
              

              

<Button> <a href='#form-section' >Book a Free Consultation</a> </Button>

             
            </div>
          </div>
        </section>

        <section
          id="trust-section"
          className="md:my-[5rem] my-[5rem] 2xl:mx-[9rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row-reverse flex-col-reverse items-center md:justify-around "
        >
          <div className="md:w-[50%] space-y-6">
          <h3 className=" font-semibold text-4xl  text-slate-500 "><span className="text-orange-400">SE0</span> Services{" "}</h3>
            <p className=" font-medium text-xl text-slate-600 leading-9  ">
            Android app development is the process of creating mobile apps for Android devices. It involves concept, design, programming, testing, and app store submission. Developers use languages like Java and Kotlin, optimize for performance, and promote apps for success in a competitive market. Ongoing updates are key for maintaining quality and compatibility.{" "}
            </p>
      
          </div>
          <div className=" md:w-[40%]">
            <img src={WebDev} alt="" />
          </div>
        </section>

        <section className="mt-10 2xl:mx-[9rem]">
          <div className="flex justify-around gap-10 px-4 md:px-10 items-center md:flex-row flex-col ">
            <h3 className="text-4xl text-slate-500 font-semibold md:w-[50%] text-center ">
              {" "}
              Our <span className="text-orange-400">Seo</span> Experties
              Services
            </h3>
            <p className="text-slate-500 md:w-[50%] text-center">
              GameBit Square is the top Website development agency; when you collaborate
              with us, rest assured that you will get all the high-performing and
              user-friendly Front-End/Backend Websites under one roof.
            </p>
          </div>
          <div className="flex md:flex-wrap md:justify-start 2xl:justify-center md:gap-7 gap-4 md:mx-[5rem] mx-[1rem] my-10 flex-row overflow-x-auto scroll-smooth" >
            {seoData.map((experties)=>(
              <ServiceCard Title={experties.title} Info={experties.description} Img={experties.Icon}  />
               
            ))}
            
            
          </div>
        </section>


        <section
          id="trust-section"
          className="my-[5rem] 2xl:mx-[9rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row flex-col-reverse items-center md:justify-around "
        >
          <div className="md:w-[50%] space-y-6  "  >
          <h3 className=" font-semibold text-4xl  text-slate-500 "><span className="text-orange-400">Aso </span>  Services{" "}</h3>
            <p className=" font-medium text-xl text-slate-600 leading-9  ">
            We specialize in iOS game development, and our experienced team can create captivating games for the iOS platform. From concept to design, programming, graphics, and sound, we offer a full range of services. We ensure quality through testing, updates, and maintenance. Whether it's action-packed or puzzle games, we have the skills to bring your vision to life. Join us on this exciting journey of iOS game development.{" "}
            </p>
       
          </div>
          <div className=" h-[600px] " >
            <img className="h-[100%] w-full " src={Mobile} alt="" />
          </div>
        </section>

        <section className="mt-10 2xl:mx-[9rem]">
          <div className="flex justify-around gap-10 px-4 md:px-10 items-center md:flex-row flex-col ">
            <h3 className="text-4xl text-slate-500 font-semibold md:w-[50%] text-center ">
              {" "}
              Our <span className="text-orange-400">Aso</span> Experties
              Services
            </h3>
            <p className="text-slate-500 md:w-[50%] text-center">
              GameBit Square is the top Website development agency; when you collaborate
              with us, rest assured that you will get all the high-performing and
              user-friendly Front-End/Backend Websites under one roof.
            </p>
          </div>
          <div className="flex md:flex-wrap md:justify-start 2xl:justify-center md:gap-7 gap-4 md:mx-[5rem] mx-[1rem] my-10 flex-row overflow-x-auto scroll-smooth" >
            {asoData.map((experties)=>(
              <ServiceCard Title={experties.title} Info={experties.description} Img={experties.Icon}  />
               
            ))}
            
            
          </div>
        </section>

    </>
  )
}

export default SeoPage