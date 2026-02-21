import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { heroStyles } from '../assets/dummyStyles'

const Hero = () => {
  return (
    <div className={heroStyles.container}>
      <Navbar/>
      </div>
  )
}

export default Hero