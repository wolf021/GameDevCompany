import React from "react"
import Button from "../Components/Button"
import WebDevHero from "../assets/about-us-hero.jpg"
import OurMission from "../assets/ourmission.jpg"
import ServiceCard from "../Components/ServiceCard/ServiceCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faWeebly } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from "react-helmet"

const AboutUsPage = () => {
  return (

    <div>
         <Helmet>
        <title>GameBitSquare - About-Us</title>
        <meta
          name="description"
          content="Looking for Top Software Development Company ? We Engineer Software Solutions for Enterprises, Growth Companies & Startups."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <section className="bg-slate-700 text-center relative ">
        <img className="w-full md:h-[500px]  " src={WebDevHero} alt="" />
        <div className="flex justify-center  w-full py-[1.5rem] md:py-[7rem] absolute top-0 bg-slate-800 bg-opacity-50 h-full  ">
          <div className="md:w-[60%]  p-[3rem] rounded-xl  space-y-4">
            <h3 className="md:text-5xl text-3xl text-white font-semibold ">
              {" "}
              <span className="text-orange-400"> About</span> Us
            </h3>
            <p className="text-white">
              We Provide Best Ranking Services For Games and Website.
            </p>

            <Button>
              {" "}
              <a href="#form-section">Book a Free Consultation</a>{" "}
            </Button>
          </div>
        </div>
      </section>

      <section
        id="trust-section"
        className="md:my-[5rem] my-[5rem] flex soace-y-10 md:text-start text-center gap-y-10 px-4 md:flex-row-reverse flex-col-reverse items-center md:justify-around "
      >
        <div className="md:w-[50%] space-y-6">
          <h3 className=" font-semibold text-4xl  text-slate-500 ">
            Our <span className="text-orange-400">Mission</span>{" "}
          </h3>
          <p className=" font-medium text-xl text-slate-600 leading-9  ">
            At Gamit Square, our mission is to push the boundaries of digital
            innovation. In gaming, we aspire to craft immersive experiences that
            captivate and inspire players globally, pioneering the future of
            interactive entertainment. In web development, we empower businesses
            with bespoke digital solutions, redefining online experiences
            through cutting-edge technologies and user-centric design. Unified
            by a passion for creativity and excellence, we strive to be a
            catalyst for innovation, shaping the digital landscape with
            integrity and collaborative partnerships. Join us in building
            experiences that inspire, entertain, and leave a lasting legacy in
            the ever-evolving digital universe.{" "}
          </p>
        </div>
        <div className=" md:w-[40%] overflow-hidden border-orange-400 border-2 rounded-xl">
          <img src={OurMission} alt="" />
        </div>
      </section>

      <section className="mt-10">
        <div className="flex justify-around gap-10 px-4 md:px-10 items-center md:flex-row flex-col ">
          <h3 className="text-4xl text-slate-500 font-semibold md:w-[50%] text-center ">
            {" "}
            What set Us <span className="text-orange-400">Apart</span>
          </h3>
        </div>
        <div className="flex md:flex-wrap md:justify-start md:gap-7 gap-4 md:mx-[5rem] mx-[1rem] my-10 flex-row overflow-x-auto scroll-smooth">
          <ServiceCard
            Title="Passionate Team"
            Info="Our team is fueled by passion for gaming. Each member brings a unique set of skills and a shared commitment to creating extraordinary gaming experiences."
          />
          <ServiceCard
            Title="Player-Centric Approach"
            Info=" Player feedback is invaluable to us. We actively listen to our community, adapting and evolving our games based on player experiences and preferences."
          />
          <ServiceCard
            Title="Innovation at the Core"
            Info=" We thrive on innovation as a cornerstone of our identity. Constantly pushing the boundaries of what's possible, we embrace new technologies and creative ideas to deliver games that stand out in the ever-evolving landscape. "
          />
        </div>
      </section>

      <section
        id="Banner"
        className="flex flex-col md:text-start text-center items-center px-2 my-[5rem] space-y-4  md:flex-row md:items-center justify-center md:space-x-10 py-[5rem] "
      >
        <p className="md:w-[68%]  font-semibold text-xl md:text-2xl ">
          Join us in shaping the future of the web. Your vision, our expertise —
          together, we build excellence.
        </p>
        <a href="#form-section">
          <Button>Book a Free Consultation</Button>
        </a>
      </section>
    </div>
  )
}

export default AboutUsPage
