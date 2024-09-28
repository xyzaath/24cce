import React from 'react'
import './PharmaLogin.css'
import { assets } from '../../assets/assets'

const PharmaLogin = () => {
    return (
        <div className='Pharma mt-5'>
            <h1 className='text-center text-white'>Add Medicine</h1>
            <form className='form-container text-white p-5'>
                <div class="mb-3">
                    <label htmlFor="image">
                        <img src={assets.imgLogo} alt="" />
                    </label>
                    <input id='image' type="file" class="form-control" aria-describedby="emailHelp" hidden required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pharmacy Name</label>
                    <input  type="text" class="form-control" id="exampleInputEmail1" placeholder='Enter your Pharmacy' aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Medicine Name</label>
                    <input  type="text" class="form-control" id="exampleInputEmail1" placeholder='Enter Medicine Name' aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Enter the price' aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="password" class="form-control" placeholder='Add the description' id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">i accept all the <span>terms and condition</span></label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default PharmaLogin
