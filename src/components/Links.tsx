import { LinkData } from "../data/data"
import {  NavLink } from "react-router-dom"

const Links = () => {
  return (
    <div className=" border-t-2">
      <p className="mt-4 mx-12 lg:mx-48">1 result</p>
        <div className="flex flex-col items-start md:flex-row md:items-center lg:flex-row lg:items-center">
        <div className="mt-5 flex-1 mx-12  lg:mx-48 mb-6">
            <h1 className="libre-baskerville-bold text-2xl " >Mai Mable Thet</h1>
            <span  className="libre-baskerville-regular" id="job">Frontend Web Developer</span>
        </div>
        <div className="mx-4 md:mx-0 lg:mx-0">
          {
            LinkData.map((link) => (
              <NavLink className={({isActive}) => isActive ? "libre-baskerville-regular border-2 border-gray-300 dark:border-white bg-slate-100 dark:bg-black  p-2  rounded-full mr-3 pl-4 pr-4"  : "libre-baskerville-regular bg-slate-100 dark:text-black p-2 pl-4 pr-4 hover:bg-slate-200 rounded-full mr-3" } id="link" to={link.url} key={link.id}>{link.title}</NavLink>
            ))
          }
        </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Links