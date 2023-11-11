import React, { useEffect, useRef } from "react"
import Button from "../Components/Button"

import TrustUmg from "../assets/icons/trust.png"
import HeroSlider from "../Components/HeroSlider/HeroSlider"
import {
  HeroData,
  CardData,
  GameImages,
  OurServices,
  Testimonilas,
  StackData
} from "../../DataConfig/Data"
import Card from "../Components/Card"


import TestimonialCard from "../Components/TestimonialCard/TestimonialCard"
import Aos from "aos"
import { Helmet } from 'react-helmet-async'


const HomePage = () => {
  const sliderRef = useRef(null)
  const sliderRef2 = useRef(null)

  useEffect(() => {
    Aos.init()
    const slider = sliderRef.current
    const slider2 = sliderRef2.current

    // Function to auto-scroll
    const autoScroll = () => {
      if (slider) {
        const scrollWidth = slider.scrollWidth - slider.clientWidth
        const scrollSpeed = 2 // Adjust scroll speed as needed

        slider.scrollLeft += scrollSpeed

        // Reset to the beginning when reaching the end
        if (slider.scrollLeft >= scrollWidth) {
          slider.scrollLeft = 0
        }
      }
    }
    const autoScroll2 = () => {
      if (slider2) {
        const scrollWidth = slider2.scrollWidth - slider2.clientWidth
        const scrollSpeed = 2 // Adjust scroll speed as needed

        slider2.scrollLeft += scrollSpeed

        // Reset to the beginning when reaching the end
        if (slider2.scrollLeft >= scrollWidth) {
          slider2.scrollLeft = 0
        }
      }
    }

    // Set an interval to call autoScroll every few milliseconds
    const scrollInterval = setInterval(autoScroll, 60) // Adjust the interval as needed
    const scrollInterval2 = setInterval(autoScroll2, 50);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(scrollInterval)
      clearInterval(scrollInterval2)
    }
  }, [])

  return (
    <>
  <Helmet>
        <title>GameBitSquare - Web & Mobile Development Company</title>
        <meta
          name="description"
          content="Looking for Top Software Development Company ? We Engineer Software Solutions for Enterprises, Growth Companies & Startups."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className=" h-max  relative     " id="hero-section">
        <HeroSlider images={HeroData} />
    
      </section>
    
    <section className="bg-slate-100 box-border h-max py-2 "  >
      
      <div className="flex py-4 md:mx-[5rem] 2xl:mx-[10rem] mx-[1rem] overflow-x-auto no-scrollbar space-x-7 " ref={sliderRef}>
      
      {StackData.map((stack)=>(
        
        <div className="w-full min-w-[10rem]  flex flex-col items-center space-y-2 bg-white py-4 rounded-3xl shadow-lg " >
        <div className="w-[60px] h-[60px]  " >
        <img  src={stack.image} alt="" />
        </div>
        <p className=" font-medium text-xl text-slate-600 ">{stack.title}</p>
      </div>
      ))}
      </div>
    </section>
    
      <section id="Why-us-section" className="  my-[5rem]  2xl:mx-[8rem] ">
        <h3 className=" font-semibold text-4xl text-center text-slate-500 ">
          <span className="text-orange-400">3D Games </span> &{" "}
          <span className="text-orange-400">Web </span> Development Company
        </h3>
        <div
          id="why-us-card-container"
          className="flex flex-col px-1 items-center justify-center md:justify-around my-10 md:flex-row  "
        >
          {CardData.map((card,index) => (
            <Card
           
              cardImg={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section
        id="Banner"
         className="flex flex-col text-center items-center px-2 my-[5rem] space-y-4  md:flex-row md:items-center justify-center md:space-x-10  " >
        <p className="md:w-[68%]  font-semibold text-xl md:text-2xl text-slate-500">
          Are you looking htmlFor a gaming app agency in the USA? Trust our talented
          team of designers and developers to get high-quality 2D and 3D games.
        </p>
        <a href='#form-section' >

<Button>Book a Free Consultation</Button>
</a>
      </section>

      <section
        id="trust-section"
        className="md:my-[5rem] flex soace-y-10 md:text-start  2xl:mx-[2rem] text-center gap-y-10 px-4 md:flex-row flex-col-reverse items-center md:justify-around "
      >
        <div className="md:w-[50%] space-y-6" >
          <h3 className=" font-semibold text-4xl  text-slate-500 ">
            <span className="text-orange-400">Trust </span> Us with Your{" "}
            <span className="text-orange-400"> Next Game</span> App Development
            Project
          </h3>
          <p className=" font-medium text-xl text-slate-600 leading-9  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptate error repudiandae necessitatibus eligendi, cupiditate
            nobis qui modi delectus totam aut? Beatae at tempora dolorem ullam
            velit veritatis quo doloremque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolor vitae blanditiis et. Earum nihil
            eum laborum nemo saepe aperiam, repellat doloribus reprehenderit
            quia molestiae, enim nam veniam! Velit, culpa in. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quis itaque est dicta!
            Placeat hic amet non, deserunt magni blanditiis unde aliquam?
            Reprehenderit sunt harum aut cupiditate reiciendis sapiente enim
            sed!{" "}
          </p>
          
        </div>
        <div className=" ">
          <img src={TrustUmg} alt="" />
        </div>
      </section>

      <section id="games-project-section" className="my-[5rem] 2xl:mx-[6rem]  ">
        <div className="md:mx-16 md:space-y-10  md:text-start text-center space-y-4">
          <h3 className=" font-semibold text-4xl  text-slate-500 md:w-[50%] ">
            <span className="text-orange-400">Trust </span> Us with Your{" "}
            <span className="text-orange-400"> Next Game</span> App or{" "}
            <span className="text-orange-400"> Web</span> Development Project
          </h3>
          <p className=" md:w-[70%] font-medium text-xl text-slate-600 leading-9  ">
            Keeping up with the latest techs and innovations is necessary htmlFor
            gamers and game development experts alike. From Augmented Reality
            and Virtual Reality to cross-platform play and mobile gaming,
            there’s a lot to look forward to as the gaming industry reaches new
            heights.{" "}
          </p>
        </div>

        <div
          id="games-project-slider"
          ref={sliderRef2}
          className="flex justify-between  overflow-x-scroll space-x-10 mx-[1rem]  md:mx-[4rem] my-6 no-scrollbar "
          
        >
          {GameImages.map((game) => (
            <div className="w-[700px] h-[200px] min-w-full md:min-w-[350px] rounded-md overflow-hidden  ">
              <img className="w-full h-[100%]" src={game.image} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section id="service-section" className="bg-orange-100 py-[5rem]  ">
        <h3 className=" font-semibold text-4xl text-center text-slate-500 ">
          <span className="text-orange-400">3D Games </span> &{" "}
          <span className="text-orange-400">Web </span> Development Company
        </h3>
        <div
          id="ourservices-card-container"
          className="flex md:flex-wrap 2xl:mx-[10rem] 2xl:justify-center overflow-x-auto   my-10 gap-y-2 gap-x-1  mx-[2rem] "
        >
          {OurServices.map((card,index) => (
            <Card
            
              cardImg={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="my-[5rem]" >
      <h3 className=" font-semibold text-4xl text-center text-slate-500 ">
          <span className="text-orange-400">Our </span> Trusted {" "}
          <span className="text-orange-400">Customes </span> Remarks
        </h3>
        <div className="flex md:justify-around 2xl:mx-[10rem] overflow-x-auto md:space-x-3 space-x-3 items-center my-4 mx-8  ">

        {Testimonilas.map((testimonial)=>(

        <TestimonialCard Name={testimonial.Name} Info={testimonial.Info} Rating={testimonial.Rating} Image={testimonial.Image}  />
        ))}
        </div>

      </section>

 
      <section>
 

 

      </section>
    
    </>
  )
}

export default HomePage
