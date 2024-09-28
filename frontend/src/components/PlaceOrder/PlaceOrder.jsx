import React, { useContext } from 'react'
import './PlaceOrder.css'
import { storeContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
    const {getTotalAmount} = useContext(storeContext)
    return (
        <div className='placeorder text-white'>
            <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName'   type="text" placeholder='First name' />
          <input required name='lastName'  type="text" placeholder='Last name' />
        </div>
        <input required name='street'  type="text" placeholder='Street' />
        <input required name='email' type="email" placeholder='Email address' />
        <div className="multi-fields">
          <input required name='city' type="text" placeholder='City' />
          <input required name='state' type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode'  type="text" placeholder='Zip code' />
          <input required name='country'  type="text" placeholder='Country' />
        </div>
        <input required name='phone' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs{getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>Rs10</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b> Rs.{getTotalAmount()+10}</b>
              </div>
            </div>
            <button className='text-white' type='submit' >PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>

    </form>
        </div>
    )
}

export default PlaceOrder
