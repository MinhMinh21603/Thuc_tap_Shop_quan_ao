// components/NewProducts.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Oversize Cotton Dress',
    category: 'Jacket, Women',
    newPrice: 110,
    oldPrice: 78,
    image: '/images/product1.jpg'
  },
  {
    id: 2,
    name: 'Boxy Denim Jacket',
    category: 'Jacket, Women',
    newPrice: 120,
    oldPrice: 88,
    image: '/images/product2.jpg'
  },
  {
    id: 3,
    name: 'Quilted Shoulder Bag',
    category: 'Jacket, Women',
    newPrice: 115,
    oldPrice: 75,
    image: '/images/product2.jpg'
  },
  {
    id: 4,
    name: 'High Ankle Jeans',
    category: 'Jacket, Women',
    newPrice: 125,
    oldPrice: 85,
    image: '/images/product2.jpg'
  },
  {
    id: 5,
    name: 'Square Shoulder Bag',
    category: 'Jacket, Women',
    newPrice: 117,
    oldPrice: 80,
    image: '/images/product2.jpg'
  },
  {
    id: 6,
    name: 'Oversize Cotton Dress',
    category: 'Jacket, Women',
    newPrice: 110,
    oldPrice: 78,
    image: '/images/product1.jpg'
  },
  {
    id: 7,
    name: 'Boxy Denim Jacket',
    category: 'Jacket, Women',
    newPrice: 120,
    oldPrice: 88,
    image: '/images/product2.jpg'
  },
  {
    id: 8,
    name: 'Quilted Shoulder Bag',
    category: 'Jacket, Women',
    newPrice: 115,
    oldPrice: 75,
    image: '/images/product2.jpg'
  },
  {
    id: 9,
    name: 'High Ankle Jeans',
    category: 'Jacket, Women',
    newPrice: 125,
    oldPrice: 85,
    image: '/images/product2.jpg'
  },
  {
    id: 10,
    name: 'Square Shoulder Bag',
    category: 'Jacket, Women',
    newPrice: 117,
    oldPrice: 80,
    image: '/images/product2.jpg'
  }
  // add more products here
];

const NewProducts = () => {
  return (
    <div className="new-products">
      <h2>New Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
