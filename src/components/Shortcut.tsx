import { HiDotsVertical } from "react-icons/hi";

const Shortcut = ({title,icon}:any) => {
  return (
    <div className="icon relative rounded-md w-32 flex items-center justify-center h-36 mt-2 ml-5 pb-3">
         <p className="dots absolute top-2 right-2"><HiDotsVertical color='white'/></p>
        <p className="icon-circle">{icon}</p>
       <p className="absolute bottom-0 pt-2 pb-3">{title}</p> 
    </div>
  )
}

export default Shortcut