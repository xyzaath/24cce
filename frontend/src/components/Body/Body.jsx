import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Body.css'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const [Category, setCategory] = useState('Pharmacy')
    const navigate = useNavigate()
    return (
        <>
            <h4 className='mt-5 text-white'>Use Our Facitlity TO The Fullest</h4>
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
                                    <h5 className="card-title">Add Medicine</h5>
                                    <p className="card-text">Easily manage your inventory by selecting a product and entering the new quantity. This feature helps you keep track of stock levels and ensures you always have the right products on hand.</p>
                                    <a onClick={()=>{navigate('/pharmalogin')}} class="btn btn-primary mt-auto text-dark">Add here</a>
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
                                    <a onClick={()=>{navigate('/medicine')}} class="btn btn-primary mt-auto text-dark">Find your Need</a>
                                </div>
                            </div>
                            
                        </div>
                }
            </div>
        </>
    )
}

export default Body
