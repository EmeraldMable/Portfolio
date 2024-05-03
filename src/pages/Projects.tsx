

import Links from "../components/Links"
import Nav from "../components/Nav"
import { useRef } from "react"
import { projects } from "../data/data"
import { Link } from "react-router-dom"
import { motion, useScroll , useTransform } from "framer-motion"


const Projects = () => {

  const ref = useRef(null)
 const {scrollYProgress} = useScroll({target:ref})
 const y = useTransform(scrollYProgress, [0,1] , [-100,120])
  return (
    <div >
        <Nav/>
        <Links/>
        <div className="mx-12 lg:mx-48 flex flex-col" ref={ref}>
          {
            projects.map((project) => (
            
            <div className="view flex flex-col lg:flex-row gap-5 items-center mt-3" key={project.id}
            >
                <Link to={project.link}  >
              <video className="rounded-md w-full h-80 mt-1 lg:mt-10"  key={project.id} muted autoPlay loop >
              <source src={project.src} type="video/mp4" />
              </video>
              </Link>
              <motion.div className="description ml-10 mb-20 lg:mb-2" style={{y}}>
                <Link to={project.link} className=" hover:underline">
                  <h2 className="libre-baskerville-bold text-xl mb-2">{project.tooltip}</h2></Link>
                <p className="libre-baskerville-regular tracking-normal text-justify " > {project.description}</p>
              </motion.div>
            </div>
      
            ))
          }
        </div>
    </div>
  )
}

export default Projects