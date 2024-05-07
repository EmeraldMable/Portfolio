import Nav from "../components/Nav"
import Links from "../components/Links"
import CVform from '../assets/CVphoto.png'
import photoshop from '../assets/photoshop-certificate.png'
import frontend from '../assets/frontend.png'
import recommend from '../assets/recommendation.png'
import BA from '../assets/BA.jpg'

const CV = () => {
  return (
    <div>
        <Nav/>
        <Links/>
        <div className="mx-12 lg:mx-48 mt-10 flex flex-col lg:flex-row lg:gap-10">
        <img className="flex-1 rounded-xl" src={CVform} alt="curriculum vitae"/>
        <div className="w-full lg:w-72">
          <h2 className="libre-baskerville-bold text-lg mb-5 mt-10 lg:mt-2">Degrees & Certificates</h2>
          <img className="rounded-md" src={photoshop} alt="photoshop certificate" />
          <img className="mt-5 rounded-md" src={frontend} alt="frontend certificate" />
          <img className="mt-5 rounded-md border-2" src={recommend} alt="Recommendation letter from KMD" />
          <img className="mt-5 rounded-md border-2" src={BA} alt="Bachelor of Arts in English" />
        </div>
        </div>
    </div>
  )
}

export default CV