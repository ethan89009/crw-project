import "./productcard.styles.scss"
import React, { useContext } from 'react'
import { Button } from "../button/Button";
import { cartContext } from "../../contexts/cartContext";


export const ProductCard = ({product}) => {
  const {addItemToCart}=useContext(cartContext);
  const addToCart=()=>{
    addItemToCart(product);
  }
  const {name,imageUrl,price}=product;
  return (
    <div className="product-card-container">
    <img src={imageUrl} alt={name} />
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button buttonType={"inverted"} onClick={addToCart}>Add to Cart</Button>
    </div>
  )
}
