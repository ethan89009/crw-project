import React from 'react'
import "./categories.styles.scss"
import { CategoryItem } from '../categoryItem/CategoryItem'
import categories from "../../categories.json"

export const CategoryList = () => {
    
  return (
    <div className='categories-container'>
      {categories.map((category)=>{
        return <CategoryItem key={category.id} category={category}/>
      })}
    </div>
  )
}
