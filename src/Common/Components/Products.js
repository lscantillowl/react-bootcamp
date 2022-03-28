import React from 'react'
import ProductCard from './ProductCard';
import Product from '../../Utils/mocks/Products';

const Products = () => {
  return (
    <>
    <h2>Products</h2>
    <div className="products-container">
      {Product.results.map((product) => {
        return(
          <ProductCard
          name={product.name}
          description={product.data.short_description}
          image={product.data.mainimage.url}
           />
        ) 
      })}
    </div>
    </>
    
  )
}


export default Products;

