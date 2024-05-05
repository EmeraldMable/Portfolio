import Nav from "../components/Nav"
import Links from "../components/Links"
import { IoPhonePortrait } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const [copy, setCopy] = useState(false)
  return (
    <div>
        <Nav/>
        <Links/>
        <div className="mx-12 lg:mx-32 flex flex-col md:flex-row lg:flex-row items-center md:gap-20 lg:gap-20">
          <div className="mt-8 lg:mt-0">
            <p className="libre-baskerville-regular leading-10 w-full"> A <span className="libre-baskerville-bold text-lg font-bold tracking-widest">team player</span> , a <strong className="libre-baskerville-bold text-lg tracking-widest"> responsible</strong> and  
            <strong className="libre-baskerville-bold text-lg tracking-widest"> accountable worker</strong> , a woman who is eager to <strong className="libre-baskerville-bold text-lg tracking-widest"> expand knowledge</strong> in web development 
            and a <strong className="libre-baskerville-bold text-lg tracking-widest"> collaborative acquaintance</strong> wants to be on your team.  </p>
          </div>
          <div className="mt-8 pt-2 mb-10 ">
            <h1 className="libre-baskerville-bold text-2xl mb-5">Contact her</h1>
            <div className="phone-no mt-3 flex gap-2 items-center relative">
                <span><IoPhonePortrait size={28}/></span>
                <p className=" cursor-pointer hover:underline">+971-523918455</p>
                <CopyToClipboard text="+971-523918455"
                onCopy={() => setCopy(true)}>
                <button className="ml-5">
                { copy && ( 
                 '+971-523918455'
                )
                }</button>
                </CopyToClipboard>  
                <span className="tooltipno">{
                    copy ? 'Copied' : 'Click to copy'}</span>   
                
               
            </div>
            <div className="mt-3 flex gap-2 items-center">
                <span><IoMail size={28}/></span>
                <Link className="hover:underline" to='mailto:emeraldjewel27797@gmail.com'>emeraldjewel27797@gmail.com</Link>
            </div>
            <div className="mt-3 flex gap-2 items-center">
                <span><FaLinkedin size={28}/></span>
                <Link className="hover:underline" to='https://www.linkedin.com/in/emerald-jewel-107ba6304/'>Emerald Jewel</Link>
            </div>
            <div className="mt-3 flex gap-2 items-center">
                <span><FaGithub size={28}/></span>
                <Link className="hover:underline" to='https://github.com/EmeraldMable'>EmeraldMable</Link>
            </div>
            <div className="mt-3 flex gap-2 items-center">
                <span><FaLocationDot size={28}/></span>
                <Link className="hover:underline" to='https://maps.app.goo.gl/XSS2AmHE8DxWTRrd8'>Green Corner Building, Al Rigga Rd, Deira - Dubai
                </Link>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Contact