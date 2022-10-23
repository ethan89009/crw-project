import React from 'react'
import "./directory.styles.scss"
import { DirectoryItem } from '../directoryItem/DirectoryItem'


export const Directory = ({categories}) => {
    
  return (
    <div className='directory-container'>
      {categories.map((category)=>{
        return <DirectoryItem key={category.id} category={category}/>
      })}
    </div>
  )
}
