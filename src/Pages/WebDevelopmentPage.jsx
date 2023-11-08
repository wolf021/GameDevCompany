import React from "react"
import Button from "../Components/Button"
import WebDevHero from "../assets/webdev-hero.jpg"
import { GameExperties, OurServices, Stacks, WebExperties } from "../../DataConfig/Data"
import Card from "../Components/Card"
import TrustUmg from "../assets/icons/trust.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Vector1 from '../assets/vector1.png'
import Mobile from '../assets/react-native.png'
import WebDev from '../assets/webdev.jpg'
import { faBinoculars, faBrush, faBug, faCloudArrowUp, faGears, faLaptopCode, faLightbulb, faSwatchbook,faGear } from "@fortawesome/free-solid-svg-icons"
import ServiceCard from "../Components/ServiceCard/ServiceCard"



const WebDevelopmentPage = () => {
    return (
      <>
        <section className="bg-slate-700 text-center relative ">
          <img className="w-full h-[500px]" src={WebDevHero} alt="" />
          <div className="flex justify-center  w-full py-[1.5rem] md:py-[7rem] absolute top-0 bg-slate-800 bg-opacity-50 h-full  ">
            <div className="md:w-[60%]  p-[3rem] rounded-xl  space-y-4">
              <h3 className="text-5xl text-white font-semibold ">
                {" "}
                Custom
                <span className="text-orange-400"> Web</span> & <span className="text-orange-400"> Mobile</span> Development Services
              </h3>
              <p className="text-white">
                Our Website development company creates enterprise-grade,
                user-friendly, and impactful Websites by using state-of-the-art
                technologies that perfectly facilitate the digital transformation
                of enterprises.
              </p>
              

              

<Button> <a href='#form-section' >Book a Free Consultation</a> </Button>

             
            </div>
          </div>
        </section>
  
        <section className="mt-10">
          <div className="flex justify-around gap-10 px-4 md:px-10 items-center md:flex-row flex-col ">
            <h3 className="text-4xl text-slate-500 font-semibold md:w-[50%] text-center ">
              {" "}
              Our <span className="text-orange-400">Web</span> Development
              Services
            </h3>
            <p className="text-slate-500 md:w-[50%] text-center">
              GameBit Square is the top Website development agency; when you collaborate
              with us, rest assured that you will get all the high-performing and
              user-friendly Front-End/Backend Websites under one roof.
            </p>
          </div>
          <div className="flex md:flex-wrap md:justify-start md:gap-7 gap-4 md:mx-[5rem] mx-[1rem] my-10 flex-row overflow-x-auto scroll-smooth" >
            {WebExperties.map((experties)=>(
              <ServiceCard Title={experties.Title} Info={experties.Info} Img={experties.Icon}  />
               
            ))}
            
            
          </div>
        </section>
       
       

        
        <section
          id="trust-section"
          className="md:my-[5rem] my-[5rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row-reverse flex-col-reverse items-center md:justify-around "
        >
          <div className="md:w-[50%] space-y-6">
          <h3 className=" font-semibold text-4xl  text-slate-500 "><span className="text-orange-400">Custom</span> Web Development{" "}</h3>
            <p className=" font-medium text-xl text-slate-600 leading-9  ">
            Android app development is the process of creating mobile apps for Android devices. It involves concept, design, programming, testing, and app store submission. Developers use languages like Java and Kotlin, optimize for performance, and promote apps for success in a competitive market. Ongoing updates are key for maintaining quality and compatibility.{" "}
            </p>
      
          </div>
          <div className=" md:w-[40%]">
            <img src={WebDev} alt="" />
          </div>
        </section>

        <section
          id="trust-section"
          className="my-[5rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row flex-col-reverse items-center md:justify-around "
        >
          <div className="md:w-[50%] space-y-6  "  >
          <h3 className=" font-semibold text-4xl  text-slate-500 "><span className="text-orange-400">Mobile </span>  Development{" "}</h3>
            <p className=" font-medium text-xl text-slate-600 leading-9  ">
            We specialize in iOS game development, and our experienced team can create captivating games for the iOS platform. From concept to design, programming, graphics, and sound, we offer a full range of services. We ensure quality through testing, updates, and maintenance. Whether it's action-packed or puzzle games, we have the skills to bring your vision to life. Join us on this exciting journey of iOS game development.{" "}
            </p>
       
          </div>
          <div className=" h-[600px] " >
            <img className="h-[100%] w-full " src={Mobile} alt="" />
          </div>
        </section>

       
        <section className="py-[5rem] my-5 bg-slate-700 text-white">
          <div className="flex justify-around gap-10 px-10 items-center  flex-col md:flex-row-reverse ">
            <h3 className="text-4xl  font-semibold md:w-[50%]  md:text-end ">
              {" "}
              How We <span className="text-orange-400">Offer</span> You The Best </h3>
            <p className=" md:w-[50%]">
              GameBit is the top Game development agency; when you collaborate
              with us, rest assured that you will get all the high-performing and
              user-friendly features specific to an Ios,Android,Amazon,Huawai
              under one roof.
            </p>
          </div>
              <div>
  
            
            <div className="flex justify-between px-10 my-4 text-white flex-col items-center md:flex-row py-10 space-y-10 ">
  
           
            <div className="text-center md:text-start ">
            <h4>Phase.<span className="text-orange-400 text-5xl" >1</span></h4> 
              <h4 className="text-orange-400">
                <span className="text-orange-400 text-3xl text-center">Requiremnet Gethering</span> 
              </h4>
              <br/>
              <div className="flex justify-around">
                <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faLightbulb} size="2x" />
              <h5 className="text-orange-400">Ideation</h5></div>
                <div className="text-text-white flex flex-col items-center "><FontAwesomeIcon icon={faBinoculars} size="2x" />
              <h5 className="text-orange-400">Stratagy</h5></div>
                <div className="text-text-white flex flex-col items-center "><FontAwesomeIcon icon={faSwatchbook} size="2x" />
              <h5 className="text-orange-400">Architecture</h5></div>
              
              </div>
              <div className=" list-none my-3 flex flex-col items-center  space-y-2 ">
                <li>Work Breakdown Structure</li>
                <li>Project Plan</li>
                <li>Project Budget</li>
                <li>Requirements Docs</li>
                <li>Use Cases</li>
                <li>User Stories</li>
              </div>
  
            </div>
            <div className="text-center md:text-start ">
            <h4>Phase.<span className="text-orange-400 text-5xl" >2</span></h4>
            <h4 className="requitext-orange-400 ">
              <span className="text-orange-400 text-3xl" >Design & Development</span>
                
              </h4>
              <br/>
            <div className="flex justify-around">
            <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faBrush} size="2x" />
              <h5 className="text-orange-400">Design</h5></div>
                <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faLaptopCode} size="2x" />
              <h5 className="text-orange-400">Development</h5></div>
                <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faBug} size="2x" />
              <h5 className="text-orange-400">Testing</h5></div>
            </div>
            <div className=" list-none my-3 flex flex-col  items-center space-y-2 ">
            
                <li>Low-Fi Design</li>
                <li>Hi-FI Design</li>
                <li>User Experience Design</li>
                <li>Source Code</li>
                <li>Compiled Code</li>
                <li>Code Documentation</li>
            </div>
            </div>
            <div className="text-center md:text-start ">
            <h4>Phase.<span className="text-orange-400 text-5xl" >3</span></h4>
            <h4 className="requitext-orange-400">
            <span className="text-orange-400 text-3xl" >Delivery & Support</span>
                
              </h4>
              <br/>
            <div className="flex justify-around">
            <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
              <h5 className="text-orange-400">Release</h5></div>
                <div className="text-white flex flex-col items-center "><FontAwesomeIcon icon={faGears} size="2x" />
              <h5 className="text-orange-400">Support</h5></div>
                <div className="text-white"><FontAwesomeIcon  size="2x" />
              <h5 className="text-orange-400"></h5></div>
            </div>
            <div className=" list-none my-3 flex flex-col  items-center space-y-2 ">
            <ul>Release Management</ul>
                <li>Change Management</li>
                <li>User Docs and Training</li>
                <li>Scheduled Maintenance</li>
                <li>Adaptive Maintenance</li>
                <li>Software Roadmap</li>
            </div>
            </div>
            </div>
              </div>
        </section>
  
  
        <section className="mt-10 my-[5rem]">
          <div className="flex justify-around gap-10 px-4 md:px-10 items-center md:flex-row flex-col ">
            <h3 className="text-4xl text-slate-500 font-semibold md:w-[50%] text-center ">
              {" "}
              Our <span className="text-orange-400">Web</span> & <span className="text-orange-400">Mobile</span>  Development
              Experties
            </h3>
            <p className="text-slate-500 md:w-[50%] text-center">
            At Gamebit Square, we create Android applications that are embedded with features that are both functional and enticing. Have a look at some of the prime features that the in-demand team at our android application development company integrates into our android apps:
            </p>
          </div>

          <div className=" my-10 mx-[4rem] " >
  <ul className="grid md:grid-cols-4 gap-4  ">
    {
        Stacks.map((stack)=>(

            <li className="flex gap-5   items-center  " >
                <FontAwesomeIcon className="text-orange-400" icon={faGear} />
                <p className="text-xl  flex text-slate-600 font-semibold " >

                {stack}
                </p>
                </li>
        ))
    }
    
  </ul>
</div>

          
        </section>

    <section>
        
        
    </section>
       
      </>
    )
  }

export default WebDevelopmentPage