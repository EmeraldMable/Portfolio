import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-10 mx-20 mb-8 mt-12">
        
        <Link to='/'>
        <h1 className='jersey-15-regular text-5xl mb-5 '>
          <span className="title1">G</span>
          <span className="title2">o</span>
          <span className="title3">o</span>
          <span className="title4">g</span>
          <span className="title5">l</span>
          <span className="title6">e</span>
        </h1>
        </Link>
        <div className="search-box flex p-2 pl-6 mb-3 pr-6 w-78 md:w-[400px] lg:w-[600px] items-center rounded-3xl">
            
            <input id="search" className="w-full ml-3 pl-1 " type="text" value='Mai Mable Thet' />
            <RxCross2 style={{marginRight:'15px' , cursor:'pointer'}} size={28}/>
            <img className="w-10 mix-blend-multiply cursor-pointer border-l-2" src="https://static.vecteezy.com/system/resources/previews/028/766/367/original/google-mic-microphone-icon-symbol-free-png.png" alt="mic icon" />
            <img className="w-8 mix-blend-multiply cursor-pointer" src="https://www.charlottedavies.com/wp-content/uploads/2022/09/google-lens-logo.png" alt="search by image icon" />
    </div>
    </div>
  )
}

export default Nav