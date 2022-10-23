import React ,{useContext} from 'react'
import { categoriesContext } from '../../contexts/categoriesContext'
import { CategoryPreview } from '../../components/category-preview/CategoryPreview';

export const CategoriesPreview = () => {

 const {categoriesMap}=useContext(categoriesContext);

  return (
  <>
  {
    Object.keys(categoriesMap).map(title=>
      {
        const products=categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
      }
    )
  }
    </>
  )
}

