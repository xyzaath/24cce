import React, { useState } from 'react'

import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [Menu,setMenu] = useState('home')
    const navigate = useNavigate()
    return (
       <div className="navbar">
        <div className="title">
            <img src={assets.pharmacorelogo} alt="" />
        </div>
        <div className="menu">
            <a onClick={()=>{setMenu('home'),navigate('/')}} className={Menu=='home' ? 'active' : '' }>Home</a>
            <a onClick={()=>{setMenu('pharmacy'),navigate('/pharmalogin')}} className={Menu=='pharmacy' ? 'active' : ''} >Add Medicine</a>
            <a href='#contact' onClick={()=>{setMenu('contact')}} className={Menu=='contact' ? 'active' : ''} >Contact</a>
        </div>
        <div className="login">
            <button>Buy now</button>
        </div>
       </div>
    )
}
export default Navbar
