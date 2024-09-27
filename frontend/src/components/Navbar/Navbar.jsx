import React, { useState } from 'react'

import './Navbar.css'

const Navbar = () => {
    const [Menu,setMenu] = useState('home')
    return (
       <div className="navbar">
        <div className="title">
            <h1>MediSOS Hub</h1>
        </div>
        <div className="menu">
            <a onClick={()=>{setMenu('home')}} className={Menu=='home' ? 'active' : '' }>Home</a>
            <a onClick={()=>{setMenu('pharmacy')}} className={Menu=='pharmacy' ? 'active' : ''} >Pharmacy Login</a>
            <a onClick={()=>{setMenu('contact')}} className={Menu=='contact' ? 'active' : ''} >Contact</a>
        </div>
        <div className="login">
            <button>Login</button>
        </div>
       </div>
    )
}
export default Navbar
