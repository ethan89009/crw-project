import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
import "./checkout.styles.scss"
import { CheckOutItem } from '../../components/checkout-item/CheckOutItem'
export const Checkout = () => {
    const {cartItems,cartTotal}=useContext(cartContext);
  return (
    <div className='checkout-container'>
    <div className='checkout-header'>
    <div className='header-block'>
      <span>Product</span>
    </div>
    <div className='header-block'>
    <span>Description</span>
    </div>
    <div className='header-block'>
    <span>Quantity</span>
    </div>
    <div className='header-block'>
    <span>Price</span>
    </div>
    <div className='header-block'>
    <span>Remove</span>
    </div>
    </div>
    {cartItems.map((cartItem)=><CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
        <span className='total'>Total:${cartTotal}</span>
    </div>
  )
}
