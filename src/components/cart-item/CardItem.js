import React from 'react'
import "./cartitem.styles.scss";
export const CardItem = ({product}) => {
    const {name,quantity,imageUrl,price}=product;
  return (
    <div className='cart-item-container '>
        <img src={imageUrl} alt={name}></img>
        <div className='item-details'>
          <span className='name'>{name}</span>
          <span className='price'>{quantity}x${price}</span>
        </div>
    </div>
  )
}
