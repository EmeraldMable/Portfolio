import Dashboard from '../assets/dashboard.mp4'
import RDC from '../assets/RDC.mp4'
import Bella from '../assets/bella.mp4'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoPhp } from "react-icons/bi";
import { SiJquery } from "react-icons/si";

const LinkData = [
    {
        id:'1',
        title:'Overview',
        url:'/overview',
        color:'rgb(94, 125, 239)'
    },
    {
        id:'2',
        title:'Projects',
        url:'/projects',
        color:'rgb(208, 24, 24);'
    },
    {
        id:'3',
        title:'CV',
        url:'/cv',
        color:'orange'
    },
    {
        id:'4',
        title:'Contact her',
        url:'/contactme',
        color: 'green'
    }
]

const projects = [
   {
    id:'1',
    src:Bella,
    tooltip:' Bella-ecommerce Website(MERN FullStack)',
    link:'https://github.com/EmeraldMable/Bella-e-commerce-website-',
    description:'Bella website is fullstack website. Customers can log in, add to cart, buy and pay. They can leave their reviews and ask questions directly to admin.'
   },
   {
    id:'2',
    src:RDC,
    tooltip:'RDC website (UI)',
    link:'https://github.com/EmeraldMable/RDC-project',
    description:'Room Design Collection display room designs for those who are about to renovate their rooms or find inspiration for room designs.'
   },
   {
    id:'3',
    src:Dashboard,
    tooltip:'Dashboard UI',
    link:'https://github.com/EmeraldMable/Dashboard-UI',
    description:'Dashboard UI website is built to showcase simple UI design to display data.'
   }
]

const skillData = [
    {
        id:'1',
        title:'react js',
        icon:<FaReact size={28}/>
    } ,
    {
        id:'2',
        title:'Tailwind css',
        icon:<SiTailwindcss size={28}/>
    },
    {
        id:'3',
        title:'Sass',
        icon:<FaSass size={28}/>
    },
    {
        id:'4',
        title:'HTML',
        icon:<FaHtml5 size={28}/>
    },
    {
        id:'5',
        title:'React three fiber',
        icon:'R3F'
    },
    {
        id:'6',
        title:'js',
        icon:<RiJavascriptFill size={28}/>
    },
    {
        id:'7',
        title:'php',
        icon:<BiLogoPhp size={28}/>
    }
]

const Backend = [
    {
        id:'1',
        title:'Nodejs',
        icon:<FaNodeJs size={28}/>
    },
    {
        id:'2',
        title:'Express',
        icon:<SiExpress size={28}/>
    },
    {
        id:'3',
        title:'SQL',
        icon:<TbSql size={28}/>
    },
    {
        id:'4',
        title:'Mongodb',
        icon:<SiMongodb size={28}/>
    },
    {
        id:'5',
        title:'Redux Toolkit',
        icon:<TbBrandRedux size={28}/>
    },
    {
        id:'6',
        title:'firebase',
        icon:<SiFirebase size={28}/>
    }
]
const UImaterial = [
    {
        id:'1',
        title:'Bootstrap',
        icon:<FaBootstrap size={28}/>
    },
    {
        id:'2',
        title:'JQuery',
        icon:<SiJquery size={28}/>
    },
    {
        id:'3',
        title:'MUI material',
        icon:<SiMui size={28}/>
    },
    {
        id:'4',
        title:'GSAP',
        icon:<SiGreensock size={28}/>
    },
    {
        id:'5',
        title:'framer motion',
        icon:<TbBrandFramerMotion size={28}/>
    },
    {
        id:'6',
        title:'figma',
        icon:<IoLogoFigma size={28}/>
    }
]

export {LinkData , projects , skillData , Backend, UImaterial}