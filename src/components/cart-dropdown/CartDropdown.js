import React from 'react'
import "./cartdropdown.styles.scss"
import { Button } from '../button/Button'

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'></div>
    <Button buttonType={"inverted"}>Checkout</Button>
    </div>
  )
}
