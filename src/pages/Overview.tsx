import Links from "../components/Links"
import Nav from "../components/Nav"
import { projects } from "../data/data"


const Overview = () => {
  return (
    <div>
        <Nav/>
        <Links/>
        <div className="overview flex gap-2">
            <div className="flex-1">img</div>
            <div className="project-section border-2 bg-slate-100 dark:bg-black dark:border-0 rounded-lg pt-5 pl-5 pb-8 pr-5 flex flex-col">
            <h2 className="libre-baskerville-regular  mb-3 text-lg text-center">Personal Projects</h2>
              {
              
                projects.map((project) => (
                    
                       <div className="project-showcase relative mb-2">
                            <video className="rounded-md" width='300' key={project.id} muted autoPlay loop >
                            <source src={project.src} type="video/mp4" />
                            </video>
                            <span className="tooltip z-40 absolute bottom-2 -right-10 ">{project.tooltip}</span>
                       </div>
                ))
              }
             
            </div>
            <div className="flex flex-col">
                <div className="flex w-full">
                    <div className="flex flex-col pt-5 pb-5 w-1/2 pl-10 pr-10 bg-slate-100 dark:bg-black rounded-lg mr-5">
                        <h2 className="libre-baskerville-regular text-md mb-10 ">Age</h2>
                        <span className="text-xl mb-5">26 years</span>
                        <span className="text-sm">27 July 1997</span>
                    </div>
                    <div className="flex flex-col pt-5 pb-5 w-1/2 pl-10 pr-10 bg-slate-100 dark:bg-black rounded-lg">
                        <h2 className="libre-baskerville-regular text-md mb-10 ">Height</h2>
                        <span className="text-xl mb-5">5 feet 1 inch</span>
                        <span  className="text-sm">154.94 cm</span>
                    </div>
                </div>
                
                <div className="pt-5 pb-8 pl-10 pr-10 bg-slate-100 w-full dark:bg-black rounded-lg mr-5 mt-10">
                    <h2 className="libre-baskerville-regular text-md mb-3 text-center">Life Motto</h2>
                    <span className="text-center text-2xl">It only takes a minute to finish.</span>
                </div>
            </div>
        </div>
        <div className="overview">
            <div>cv</div>
            <div>
                <div>Skill</div>
                <div>Contact me</div>
            </div>
        </div>
    </div>
  )
}

export default Overview