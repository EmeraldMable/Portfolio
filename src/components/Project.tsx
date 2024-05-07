
import { Link } from "react-router-dom"

type Props = {
    divStyle:string,
    divKey:any,
    videoLink:any,
    videoKey:any,
    spanStyle:any,
    span:any,
    link:any,
    videoStyle:any
}

const Project = ({divStyle , divKey , link , videoLink , videoStyle, videoKey, spanStyle, span}:Props) => {
  return (
    <div className={divStyle} key={divKey}>
        <Link to={link}>
        <video className={videoStyle} key={videoKey} muted autoPlay loop >
        <source src={videoLink} type="video/mp4" />
        </video>
        </Link>
        <span className={spanStyle}>{span}</span>
    </div>
  )
}

export default Project