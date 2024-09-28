import React, { useContext } from 'react'
import { storeContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import './CartDesign.css'
import { useNavigate } from 'react-router-dom'

const CartDesign = () => {
    const {cartItems,addtocart,removecart} = useContext(storeContext)
    const navigate = useNavigate()
  return (
    <div className='cart'>
      {
        assets.medicineData.map((data,index)=>{
            if(cartItems[data.id]>0){
                return(
                    <div className="cart-item">
                        <img src={data.image.url} alt="" />
                        <div className="cart-details text-white">
                            <p>Rs.{data.price}</p>
                            <p>{data.description}</p>
                        </div>
                        <div className="cart-quantity text-white">
                        <p onClick={()=>{addtocart(data.id)}} >+</p>
                        <p>{cartItems[data.id]}</p>
                        <p onClick={()=>{removecart(data.id)}}>-</p>
                        </div>
                    </div>
                )
            }
        })
    }
    <button onClick={()=>{navigate('/order')}} >Proceed to Checkout</button>
    </div>
  )
}

export default CartDesign
