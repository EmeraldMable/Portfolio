import { LinkData } from "../data/data"
import {  NavLink } from "react-router-dom"

const Links = () => {
  return (
    <div className="overview border-t-2">
      <p>About 1 result</p>
        <div className="flex items-center">
        <div className="mt-5 flex-1">
            <h1 className="libre-baskerville-bold" id="name">Mai Mable Thet</h1>
            <span  className="libre-baskerville-regular" id="job">React Frontend Web Developer</span>
        </div>
        <div>
          {
            LinkData.map((link) => (
              <NavLink className={({isActive}) => isActive ? "libre-baskerville-regular border-2 border-black dark:border-white bg-slate-100 dark:bg-black  p-2  rounded-full mr-3 pl-4 pr-4"  : "libre-baskerville-regular bg-slate-100 dark:text-black p-2 pl-4 pr-4 hover:bg-slate-200 rounded-full mr-3" } id="link" to={link.url} key={link.id}>{link.title}</NavLink>
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