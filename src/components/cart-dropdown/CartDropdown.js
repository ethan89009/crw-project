import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./cartdropdown.styles.scss"
import { Button } from '../button/Button'
import { CardItem } from '../cart-item/CardItem'
import { useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
export const CartDropdown = () => {
  const {cartItems}=useContext(cartContext);
  const navigate=useNavigate();
  const goToCheckoutHandler=()=>{
    navigate("/checkout");
  }
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.map(cartItem=>{
      return <CardItem key={cartItem.id} product={cartItem}></CardItem>
    })}
    </div>
    <Button buttonType={"inverted"} onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  )
}
