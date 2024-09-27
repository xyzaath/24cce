import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer'>
      <div className="foot-left">
        <h1 className='text-center mt-5'>MediSOS Hub</h1>
      </div>
      <div className="foot-center">
      <i className="bi bi-envelope">medisoshub@gmail.com</i>
      <i className="bi bi-headset">+91 444-444-4444</i>
      <i class="bi bi-instagram">medi_sos_hub</i>
      </div>
      <div className="foot-right">
        <ul>
            <li>Home</li>
            <li>Pharmacy</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
    <p className='text-center'>@copyrights reserved by MediSosHub</p>
    </div>
  )
}

export default Footer
