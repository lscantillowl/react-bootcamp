import React from 'react'
import '../../../src/App.css';

const ProductCard = (product) => {
  return (
    <div className="card">
      <img className='img-card' src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
      <p><button>Add to Cart</button></p>
    </div>
  )
}
export default ProductCard;
