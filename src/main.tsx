import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview.tsx'
import Projects from './pages/Projects.tsx'
import CV from './pages/CV.tsx'
import Contact from './pages/Contact.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   
    <Route path='/' element={<Home/>}></Route>
    <Route path='/overview' element={<Overview/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/cv' element={<CV/>}></Route>
    <Route path='/contactme' element={<Contact/>}></Route>

   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
