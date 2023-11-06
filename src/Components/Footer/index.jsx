import React from "react"
import BrandLogo from "../../assets/BrandLogo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { OurServicesLinks } from "../../../DataConfig/Data"
import dayjs from "dayjs"

const Footer = () => {
  const currentDate = dayjs().format("YYYY")
  return (
    <>
      <div className="w-full flex md:flex-row flex-col items justify-around py-10 bg-slate-700 text-white h-max space-y-7 px-10 ">
        <div className="flex items-center space-y-3 py-3 justify-around flex-col text-center  md:w-[20%]  ">
          <div className="  ">
            <img className=" h-[70px] " src={BrandLogo} alt="" />
          </div>
          <div>
            <p>
            we blend creativity and code to bring your digital dreams to life. Whether it's crafting captivating games or dynamic web solutions.
            </p>
          </div>
          <div className="flex justify-around space-x-10  ">
          <a className="group" href="/">

<FontAwesomeIcon
  size="2x"
  className="text-white group-hover:text-orange-400 "
  icon={faFacebookSquare}
  />
  </a>
             <a className="group" href="/">

<FontAwesomeIcon
  size="2x"
  className="text-white group-hover:text-orange-400 "
  icon={faInstagram}
  />
  </a>
             <a className="group" href="/">

<FontAwesomeIcon
  size="2x"
  className="text-white group-hover:text-orange-400 "
  icon={faLinkedin}
  />
  </a>
            <a className="group" href="/">

            <FontAwesomeIcon
              size="2x"
              className="text-white group-hover:text-orange-400 "
              icon={faWhatsapp}
              />
              </a>
          </div>
        </div>
        <div className="text-center md:text-start ">
          <p className="text-xl font-semibold border-b-2  border-orange-400 mb-3 ">
            Services
          </p>
          <ul className=" space-y-2 flex flex-col ">
            {OurServicesLinks.map((serviceLink) => (
              <li>
                <a href="">{serviceLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-start ">
          <p className="text-xl font-semibold border-b-2 border-orange-400 mb-3 ">
            Main-LInks
          </p>
          <ul className=" space-y-2 flex flex-col ">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-orange-400 text-center py-3">
        <p className="  text-white text-xl ">
          {" "}
          {currentDate} GameBit<sup>©</sup>. All Rights Reserved
          <span className="text-slate-700 font-semibold ">
            <Link to="/privacy-policy" >
            .Privacy Policy</Link></span>
        </p>
      </div>
    </>
  )
}

export default Footer
