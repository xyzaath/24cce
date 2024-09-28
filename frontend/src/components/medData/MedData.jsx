import React, { useContext, useEffect } from 'react'
import './MedData.css'
import { assets } from '../../assets/assets'
import { storeContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const MedData = () => {
    const {cartItems,setcartItems,addtocart} = useContext(storeContext)
    const navigate = useNavigate()
    useEffect(() => {
        return () => {
            console.log(cartItems)
        };
    }, [cartItems]); // Array of dependencies

  return (
    <div className='med-container'>
      <div className="med-display">
        {
            assets.medicineData.map((data,index)=>{
                return(
                    <div key={index} className="med-item">
                        <img src={data.image.url} alt="" />
                        <div className="description text-white">
                            <h4>{data.name}</h4>
                            <p>Rs {data.price}</p>
                            <p>{data.description}</p>
                            <button onClick={()=>{addtocart(data.id),navigate('/cart')}}>{!cartItems[data.id] ?' Add to Cart' : 'Go To Cart'}</button>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default MedData
