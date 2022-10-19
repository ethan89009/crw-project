import React from 'react'
import "./cartdropdown.styles.scss"
import { Button } from '../button/Button'
import { CardItem } from '../cart-item/CardItem'
import { useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
export const CartDropdown = () => {
  const {cartItems}=useContext(cartContext);
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.map(cartItem=>{
      return <CardItem product={cartItem}></CardItem>
    })}
    </div>
    <Button buttonType={"inverted"}>Checkout</Button>
    </div>
  )
}
