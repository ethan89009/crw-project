 import React from 'react'
 import { useNavigate } from 'react-router-dom'
 import "./directory-item.styles.scss"

 export const DirectoryItem = (props) => {
    const {title, imageUrl,route}=props.category;
    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(route);
    }
   return (
    <div className='directory-item-container' onClick={handleNavigate}>
    <img className="background-image" style={{"backgroundImage":`url(${imageUrl})`}}/>
    <div className='body'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
   )
 }
 