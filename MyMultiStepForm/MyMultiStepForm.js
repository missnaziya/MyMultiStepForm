import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'


const MyMultiStepForm = () => {
  return (
    <div>
     <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />




     </Routes>


    </div>
  )
}

export default MyMultiStepForm