import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' id='contact'>
    <div className='footer'>
      <div className="foot-left">
        <h1 className='text-center mt-5'>PharmaCore</h1>
      </div>
      <div className="foot-center">
      <i className="bi bi-envelope">PharmaCore@gmail.com</i>
      <i className="bi bi-headset">+91 444-444-4444</i>
      <i class="bi bi-instagram">pharma_core</i>
      </div>
      <div className="foot-right">
        <ul>
            <li>Home</li>
            <li>Pharmacy</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
    <p className='text-center'>@copyrights reserved by PharmaCore</p>
    </div>
  )
}

export default Footer
