import { FaSearch } from "react-icons/fa";
import '../App.css'
import Shortcut from "../components/Shortcut";
import { RiHome4Fill } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { FcDocument } from "react-icons/fc";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  

  return (
    <>
      <div className="home">
        <h1 className='jersey-15-regular text-8xl mb-5 '>
          <span className="title1">G</span>
          <span className="title2">o</span>
          <span className="title3">o</span>
          <span className="title4">g</span>
          <span className="title5">l</span>
          <span className="title6">e</span>
        </h1>
        <div className="search-box flex p-2 pl-6 mb-3 pr-6 w-78 md:w-[400px] lg:w-[600px] items-center rounded-3xl">
            <FaSearch color="gray" size={28}/>
            <input id="search" className="w-full ml-3 pl-1 " type="text" placeholder="Search Mai Mable Thet" />
            <img className="w-10 mix-blend-multiply cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/028/766/367/original/google-mic-microphone-icon-symbol-free-png.png" alt="mic icon" />
            <img className="w-8 mix-blend-multiply cursor-pointer" src="https://www.charlottedavies.com/wp-content/uploads/2022/09/google-lens-logo.png" alt="search by image icon" />
        </div>

        <div className="grid grid-cols-3">
       <Link to='/overview'>
          <Shortcut title='Overview' icon={<RiHome4Fill size={36}/>}/>
       </Link>
       <Link to='/projects'>
       <Shortcut title='Projects' icon={<HiComputerDesktop size={36}/>} />
       </Link>
       <Link to='/cv'>
       <Shortcut title='CV' icon={<FcDocument size={36}/>}/>
       </Link>
       <Link to='/contactme'>
       <Shortcut title='Contact me' icon={<FaRegHandshake size={36}/>}/>
       </Link>
        </div>
    </div>
    </>
  )
}

export default Home
