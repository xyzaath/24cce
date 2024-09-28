import React from 'react'
import './Title.css'
import { assets } from '../../assets/assets'

const Title = () => {
  return (
    <div className='titlehead'>
      <img src={assets.titleScreen} alt="" />
      <p className='text-dark ms-4'>Your Trusted Community Pharmacy <br /> At PharmaCore, we prioritize your health and well-being. Our dedicated team offers personalized care, expert advice, and a wide range of medications and health products. We’re here to support you with everything from prescriptions to wellness consultations—because your health matters to us.</p>
    </div>
  )
}

export default Title
