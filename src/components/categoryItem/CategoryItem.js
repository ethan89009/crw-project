 import React from 'react'
 
 export const CategoryItem = (props) => {
    const {title, imageUrl}=props.category
   return (
    <div className='category-container'>
    <img className="background-image" style={{"backgroundImage":`url(${imageUrl})`}}/>
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
   )
 }
 