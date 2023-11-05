import React, { useEffect, useRef } from "react"
import Button from "../Components/Button"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import TrustUmg from "../assets/icons/trust.png"
import HeroSlider from "../Components/HeroSlider/HeroSlider"
import {
  HeroData,
  CardData,
  GameImages,
  OurServices,
} from "../../DataConfig/Data"
import Card from "../Components/Card"
import FormImg from "../assets/form.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HomePage = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

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

    // Set an interval to call autoScroll every few milliseconds
    const scrollInterval = setInterval(autoScroll, 40) // Adjust the interval as needed

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(scrollInterval)
    }
  }, [])

  return (
    <>
      <section className=" h-max  relative     " id="hero-section">
        <HeroSlider images={HeroData} />
     <div className="fixed  rounded-full  animate-pulse border-orange-400 bottom-14   right-4 z-10  w-max " >
          <a href="https://wa.me/message/2RFBFUTBCJUIL1">

          <FontAwesomeIcon size="3x" className="text-green-400" icon={faWhatsapp} />
          </a>

        </div> 
      </section>
    
    <section className="" >

    </section>
    
      <section id="Why-us-section" className="  my-[5rem] ">
        <h3 className=" font-semibold text-4xl text-center text-slate-500 ">
          <span className="text-orange-400">3D Games </span> &{" "}
          <span className="text-orange-400">Web </span> Development Company
        </h3>
        <div
          id="why-us-card-container"
          className="flex flex-col px-3 items-center justify-center md:justify-around my-10 md:flex-row  "
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
        <Button>Book A Free Consultation</Button>
      </section>

      <section
        id="trust-section"
        className="md:my-[5rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row flex-col-reverse items-center md:justify-around "
      >
        <div className="md:w-[50%] space-y-6">
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
          <Button>Book A Free Consultation</Button>
        </div>
        <div className=" ">
          <img src={TrustUmg} alt="" />
        </div>
      </section>

      <section id="games-project-section" className="my-[5rem]  ">
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
          className="flex justify-between  overflow-x-scroll space-x-10 mx-[1rem] md:mx-[4rem] my-6 no-scrollbar "
          ref={sliderRef}
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
          className="flex md:flex-wrap overflow-x-auto   my-10 gap-y-2 gap-x-1  mx-[2rem] "
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

      <section
        id="form-section"
        className="bg-slate-800 flex  space-y-5 md:flex-row flex-col md:space-x-[4rem]  md:items-center   h-max  "
      >
        <div className="md:w-[50%] h-[600px] relative  ">
          <img className="w-full h-[100%] " src={FormImg} alt="" />
          <div className="absolute top-1/2 px-10 md:w-[80%]  text-white font-semibold text-4xl  ">
            <p className=" font-semibold text-4xl  text-slate-100 ">
              <span className="text-orange-400">Contact us </span>Today and Get
              <span className="text-orange-400"> Started</span> With Us
            </p>
          </div>
        </div>
        <div>
          <form className="grid px-3 py-4 md:py-0  md:grid-cols-2 h-max   gap-4">
            <div className="mb-4 col-span-2 md:col-auto ">
              <label
                className="text-orange-400 font-semibold text-2xl   "
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-lg  outline-orange-400"
              />
            </div>

            <div className="mb-4 col-span-2  md:col-auto">
              <label
                className="text-orange-400 font-semibold text-2xl "
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg outline-orange-400"
              />
            </div>

            <div className="mb-4 col-span-2">
              <label
                className="text-orange-400 font-semibold text-2xl "
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-lg outline-orange-400"
              />
            </div>

            <div className="mb-4  col-span-2">
              <label
                className="text-orange-400 mb-4 font-semibold text-2xl "
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your Query Here . We will Get Back To You"
                className="w-full h-40 px-3 py-2 border rounded-lg outline-orange-400 resize-none"
              ></textarea>
            </div>
            <div className=" ">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomePage
