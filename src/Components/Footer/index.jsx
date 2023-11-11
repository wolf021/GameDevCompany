import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
import Button from "../Button"
import FormImg from "../../assets/form.jpg"
import {  toast } from 'react-toastify';



const Footer = () => {
  const currentDate = dayjs().format("YYYY")

  const Service_ID  = 'service_vrkgncq'
  const Tempelate_ID = 'template_k445zgm'
  const Public_ID = 'O517K-8rZEWmz1bng'

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Service_ID, Tempelate_ID, form.current,  Public_ID)
      .then((result) => {
          console.log(result.text);
          toast.success("Your email has been to GameBit Square")
      }, (error) => {
          console.log(error.text);
          toast.success("Unable to send Email. please Retry later or whatsapp us")
      });
  };
  
  

  return (
    <>
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
          <form  ref={form} onSubmit={sendEmail} className="grid px-3 py-4 md:py-0  md:grid-cols-2 h-max   gap-4">
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
                name="from_name"
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
                type="text"
                id="email"
                name="user_email" 
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
                name="contact_number"
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
              <Button type="submit"  >Submit</Button>
            </div>
          </form>
        </div>
      </section>
      <div className="w-full">
        <div className="w-full flex md:flex-row flex-col items justify-around py-10 bg-slate-700 text-white h-max space-y-7 px-10 ">
          <div className="flex items-center space-y-3 py-3 justify-around flex-col text-center  md:w-[20%]  ">
            <div className="  ">
              <img className=" h-[70px] " src={BrandLogo} alt="" />
            </div>
            <div>
              <p>
                we blend creativity and code to bring your digital dreams to
                life. Whether it's crafting captivating games or dynamic web
                solutions.
              </p>
            </div>
            <div className="flex justify-around space-x-10  ">
              <a className="group" href="https://www.facebook.com/profile.php?id=61553610740592&mibextid=ZbWKwL">
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
              <a
                className="group"
                href="https://www.linkedin.com/company/gamebit-square-pvt-ltd/?viewAsMember=true"
              >
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
                  <Link to={serviceLink.link} >{serviceLink.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-start ">
            <p className="text-xl font-semibold border-b-2 border-orange-400 mb-3 ">
              Main-LInks
            </p>
            <ul className=" space-y-2 flex flex-col ">
              <li> <Link to="/" >Home</Link> </li>
              <li>Contact</li>
              <li> <Link to="/about-us" > About</Link></li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-400 text-center py-3 w-full">
          <p className="  text-white text-xl ">
            {" "}
            {currentDate} GameBit Square PVT(LTD) <sup>®</sup>. All Rights
            Reserved
            <span className="text-slate-700 font-semibold ">
              <Link to="/privacy-policy">.Privacy Policy</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
