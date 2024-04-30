import Dashboard from '../assets/dashboard.mp4'
import RDC from '../assets/RDC.mp4'
import Bella from '../assets/bella.mp4'

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
        title:'Contact me',
        url:'/contactme',
        color: 'green'
    }
]

const projects = [
   {
    id:'1',
    src:Bella,
    tooltip:' Bella-ecommerce Website(MERN FullStack)'
   },
   {
    id:'2',
    src:RDC,
    tooltip:'RDC website (UI)'
   },
   {
    id:'3',
    src:Dashboard,
    tooltip:'Dashboard UI'
   }
]
export {LinkData , projects}