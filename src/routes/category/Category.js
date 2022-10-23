import React from 'react'
import { ProductCard } from '../../components/productCard/ProductCard'
import { useState,useContext,useEffect } from 'react'
import { categoriesContext } from '../../contexts/categoriesContext'
import { useParams } from 'react-router-dom'
import "./category.styles.scss"

export const Category = () => {

    const {category}=useParams();
    const {categoriesMap}=useContext(categoriesContext);
    const [products,setProducts]=useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap]);
    
  return (
    <div className='category-container'>
        {products&&products.map(product=>{return <ProductCard key={product.id} product={product}/>})}
    </div>
  )
}
