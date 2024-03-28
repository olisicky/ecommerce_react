import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div className="grid grid-cols-4 gap-5 m-10">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
    </div>
  )
}

export default ProductList