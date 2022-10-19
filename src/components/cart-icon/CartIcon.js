import React, { useContext } from 'react'
import { ReactComponent  as ShopCart}from '../../assests/shopping-bag.svg'
import { cartContext } from '../../contexts/cartContext'
import "./carticon.styles.scss"

export const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,cartCount}=useContext(cartContext);
  const toggleIsCartOpen=()=>{
    setIsCartOpen(()=>!isCartOpen);
  };
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen} >
    <ShopCart className="shopping-icon"/>
    <span className='item-count'>{cartCount}</span>
    </div>
  )
}
