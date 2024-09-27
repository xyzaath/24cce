import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Body.css'

const Body = () => {
    const [Category, setCategory] = useState('Pharmacy')
    return (
        <>
            <h4 className='mt-5'>Use Our Facitlity TO The Fullest</h4>
            <div className='body-container m-5'>
                <input onClick={() => { Category == 'Pharmacy' ? setCategory('') : setCategory('Pharmacy') }} type="checkbox" id="toggle" className="toggleCheckbox" />
                <label for="toggle" className='toggleContainer'>
                    <div>Pharmacy</div>
                    <div>Consumer</div>
                </label>
            </div>
            <div className="card-container">
                {
                    Category == 'Pharmacy' ?
                        <div className="category-function">
                            <div className="card" >
                                <img src={assets.pharmacyLogo} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Login Your Pharmacy</h5>
                                    <p className="card-text">Access your account to manage prescriptions, view patient information, and stay updated on inventory. Join us in providing exceptional care and service to our community!</p>
                                    <a href="#" class="btn btn-primary mt-auto">Login here</a>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={assets.pharmacyLogo} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Login Your Pharmacy</h5>
                                    <p className="card-text">Access your account to manage prescriptions, view patient information, and stay updated on inventory. Join us in providing exceptional care and service to our community!</p>
                                    <a href="#" class="btn btn-primary mt-auto">Login here</a>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="category-function">

                            <div className="card" >
                                <img src={assets.medicinLogo} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Find Your Medicine</h5>
                                    <p className="card-text">Search for the medications you need with ease. Enter the name or category, and discover available options at your local pharmacies. Your health is just a click away!</p>
                                    <a href="#" class="btn btn-primary mt-auto">Find your Need</a>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={assets.medicinLogo} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Find Your Medicine</h5>
                                    <p className="card-text">Search for the medications you need with ease. Enter the name or category, and discover available options at your local pharmacies. Your health is just a click away!</p>
                                    <a href="#" class="btn btn-primary mt-auto">Find your Need</a>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Body
