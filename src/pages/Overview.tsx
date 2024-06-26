import Links from "../components/Links"
import Nav from "../components/Nav"
import { projects, skillData , UImaterial , Backend } from "../data/data"
import profile from '../assets/profilevd.mp4'
import { MdOutlineWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import CV from '../assets/CVphoto.png'
import photo from '../assets/DV.jpg'
import chill from '../assets/chill.jpg'
import asho from '../assets/Asho.jpg'
import landscape from '../assets/enjoy.jpg'
import { SiWikipedia } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Project from "../components/Project";
import { FaLocationDot } from "react-icons/fa6";
import Loading from "../components/Loading";


const Overview = () => {
    const [copy , setCopy] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },5000)
    },[])
  return (

    <div>
        <Nav/>
        <Links/>
        <div className=" mx-12 lg:mx-20 mt-5 flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col flex-1">
                <div className=" w-full md:w-[600px] mb-5 md:mx-auto lg:w-auto md:h-auto lg:h-auto">
                <div className="flex">
                   {
                    loading ? <div className=" w-72"><Loading/></div>
                    :
                    <video className=" rounded-s-lg mb-3 w-2/3 object-cover" width='300' muted autoPlay loop>
                    <source src={profile} />
                </video>
                   }
                    <div className="flex flex-col ml-2">
                        <img className="w-full rounded-e-lg mb-3" src={photo} alt="profile photo" />
                        <img className="w-full rounded-e-lg mb-4" src={chill} alt="photo with a puppy toy" />
                        <img className="w-full rounded-e-lg mb-4" src={asho} alt="my beloved friends" />
                        <img className=" rounded-e-lg" src={landscape} alt="enjoying life" />
                        <div ></div>
                    </div>
                </div>
               <span className="libre-baskerville-regular text-lg"> Hi Everyone <MdOutlineWavingHand size={20} style={{display:'inline' , marginRight:'4px'}}/> </span>
                <span className="libre-baskerville-regular text-sm block mt-2">Nice to meet you!</span>
                </div>
               
                
                
            </div>
            <Link to='/projects' className="project-section flex-1 rounded-lg pl-5 w-full pr-5 flex flex-col">
            <h2 className="libre-baskerville-bold text-center mb-2 text-xl hover:underline">Personal Projects</h2>
              {
              
                projects.map((project) => (
                   <Suspense fallback={<Loading/>}>
                     <Project divStyle="project-showcase relative mb-2 mx-auto" divKey={project.id} link={project.link} videoStyle="rounded-md w-full" videoKey={project.id}
                    videoLink={project.src} spanStyle="tooltip z-40 absolute bottom-2 -right-10 " span={project.tooltip}/>
                    
                   </Suspense>
                ))
              }
             
            </Link >
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row lg:flex-row w-full ">
                    <div className="libre-baskerville-regular flex flex-col pt-5 pb-5 w-full mb-4 md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left md:pl-10 lg:pl-10 pr-2 cursor-pointer hover:bg-slate-200  dark:hover:bg-white dark:hover:text-black  bg-slate-100 dark:bg-black rounded-lg mr-5">
                        <h2 className=" text-md mb-10 ">Age</h2>
                        <span className="text-xl mb-3">26 years</span>
                        <span className="text-sm">27 July 1997</span>
                    </div>
                    <div className="flex flex-col pt-5 w-full md:w-1/2 lg:w-1/2 text-center mb-4 md:text-left lg:text-left md:pl-8 lg:pl-8  bg-slate-100 hover:bg-slate-200 cursor-pointer dark:hover:bg-white dark:hover:text-black dark:bg-black rounded-lg">
                        <h2 className="libre-baskerville-regular text-md mb-10">Height</h2>
                        <span className="text-xl mb-1">5 feet 1 inch</span>
                        <span  className="text-sm">154.94 cm</span>
                    </div>
                </div>
                
                <div className="libre-baskerville-regular pt-5 pb-8 pl-3 md:pl-10 lg:pl-10 pr-2 bg-slate-100 w-full text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-white dark:hover:text-black dark:bg-black rounded-lg mr-5 mt-4">
                    <h2 className=" text-md mb-3">Life Motto</h2>
                    <span className="libre-baskerville-regular text-xl md:text-2xl lg:text-2xl">It only takes a minute to finish.</span>
                </div>
                <div className="libre-baskerville-regular pt-5 pb-8 pl-4 md:pl-10 lg:pl-10 pr-2 bg-slate-100 w-full cursor-pointer hover:bg-slate-200 dark:hover:bg-white dark:hover:text-black dark:bg-black rounded-lg mr-5 mt-4">
                <h2 className="mb-2 text-md md:text-lg lg:text-lg">Skill Bag</h2>
                <span className="text-sm">Main Core</span>
                <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {
                        skillData.map((skill) => (
                            <li className="skill-icon mr-3 lg:mr-5 mt-5 text-md " >{skill.icon}</li>
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
        <div className="mt-10">
           <div className="border-t-2 mx-12 lg:mx-20 flex-col lg:flex-row  pt-10 flex  gap-5">
           <div className=" w-full">
           <div className=" flex gap-3">
                
                <div className="w-6 h-6 md:w-10 md:h-10 p-1 md:p-0 lg:p-0 lg:w-10 lg:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <SiWikipedia size={25} className="hover:cursor-pointer"/>
                </div>
                 <div>
                     <h4 className="libre-baskerville-bold hover:cursor-pointer">Wikipedia</h4>
                     <span className="opacity-85 hover:cursor-pointer">https://en.Wikipedia.org &gt; wiki &gt; Mai_Mable_Thet</span>
                 </div>
           
         </div>
        <div className="mt-4">
      
        <Link className=" text-blue-800 dark:text-white text-2xl hover:underline" to='/cv'>Mai Mable Thet</Link>
        <p className="text-lg mt-2"><strong>Mai Mable Thet</strong> is a passionate frontend web developer who is always amazed at the
         capability of the frontend web development. Simple but...<Link to='/cv' className="text-blue-800 dark:text-white underline text-sm">Explore her CV</Link></p>

         <Link to='/contactme' className="mt-8 border-t-2 pt-8">
            <h1 className="libre-baskerville-bold text-2xl mb-5 mt-10">Contact her</h1>
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
         </Link>
        </div>
           </div>
           <Link to='/cv'>
           <img className=" w-56 rounded-lg pr-5" src={CV} alt="curriculum vitae" /></Link>
            
            <div className="border-l-2 pl-5 w-full  lg:w-1/2 mb-10">
                <h2 className="libre-baskerville-regular">Few More</h2>
                <div className="grid grid-cols-3 md:grid-cols-8 lg:grid-cols-4">
                    {
                        UImaterial.map((material) => (
                            <li className="skill-icon mr-5 mt-5 text-md " >{material.icon}</li>
                        ))
                    }
                </div>
                <h2 className="libre-baskerville-regular mt-5">Backend</h2>
                <div className=" grid grid-cols-3 md:grid-cols-8 lg:grid-cols-4 border-b-2 pb-5">
                    {
                        Backend.map((back) => (
                            <li className="skill-icon mr-5 mt-5 text-md " >{back.icon}</li>
                        ))
                    }
                </div>

                <h2 className="libre-baskerville-bold mt-5 text-lg">About</h2>
                <p>She worked as an assistant teacher at DSY(Diplomatic School Yangon) for three years. But she felt like it was not her place. One day, she saw a css tutorial on You Tube while she was scrolling the screen. 
                    Since then, she was dragged into the vortex - frontend web development. She mustered courage to switch to website development from the stable career. She knows making career change is not easy but her passion is
                    quite strong to make adversities small. </p>
            </div>
            </div>
           </div>
           
        
      
    </div>
  )
}

export default Overview