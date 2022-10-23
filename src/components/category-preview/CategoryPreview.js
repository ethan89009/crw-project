import React from 'react'
import { ProductCard } from '../../components/productCard/ProductCard'
import "./category-preview.styles.scss"
import { Link } from 'react-router-dom'

export const CategoryPreview = ({title, products}) => {

  return (
    <div className='category-preview-container'>
        <h2>
            <Link className='title' to={title.toLowerCase()}>{title.toLowerCase()}</Link>
        </h2>
        <div className='preview'>
            {
                products.filter((_,index)=>index<4).map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
    </div>
  )
}
