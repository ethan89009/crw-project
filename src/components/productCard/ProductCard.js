import "./productcard.styles.scss"
import React from 'react'
import { Button } from "../button/Button";


export const ProductCard = ({product}) => {
    const {name,imageUrl,price}=product;
  return (
    <div className="product-card-container">
    <img src={imageUrl} alt={name} />
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button buttonType={"inverted"}>Buy Now</Button>
    </div>
  )
}
