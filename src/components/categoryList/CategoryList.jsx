import React from 'react'
import "./categories.styles.scss"
import { CategoryItem } from '../categoryItem/CategoryItem'


export const CategoryList = ({categories}) => {
    
  return (
    <div className='categories-container'>
      {categories.map((category)=>{
        return <CategoryItem key={category.id} category={category}/>
      })}
    </div>
  )
}
