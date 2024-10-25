// pages/newProducts.tsx
import React from 'react';

const products = [
  { id: 1, name: 'Oversize Cotton Dress', price: 110, salePrice: 70, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+1' },
  { id: 2, name: 'Boxy Denim Jacket', price: 120, salePrice: 80, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+2' },
  { id: 3, name: 'Quilted Shoulder Bag', price: 115, salePrice: 75, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+3' },
  { id: 4, name: 'High Ankle Jeans', price: 125, salePrice: 85, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+4' },
  { id: 5, name: 'Square Shoulder Bag', price: 117, salePrice: 80, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+5' },
  { id: 6, name: 'Oversize Cotton Dress', price: 110, salePrice: 70, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+6' },
  { id: 7, name: 'Boxy Denim Jacket', price: 120, salePrice: 80, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+7' },
  { id: 8, name: 'Quilted Shoulder Bag', price: 115, salePrice: 75, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+8' },
  { id: 9, name: 'Boxy Denim Jacket', price: 120, salePrice: 80, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+9' },
  { id: 10, name: 'Quilted Shoulder Bag', price: 115, salePrice: 75, rating: 5, image: 'https://via.placeholder.com/282x310?text=Product+10' }
];

const NewProducts = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">New Products</h1>
        <div className="mt-4">
  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
    Featured
  </button>
  <button className="bg-gray-200 text-black py-2 px-4 rounded ml-2 hover:bg-gray-400 transition duration-300">
    Trending
  </button>
  <button className="bg-gray-200 text-black py-2 px-4 rounded ml-2 hover:bg-gray-400 transition duration-300">
    New Arrival
  </button>
</div>

      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 justify-items-center pb-20">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <div className="text-lg text-gray-700">
              <span className="line-through">${product.price}</span> <span className="text-red-500">${product.salePrice}</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                {'★'.repeat(product.rating)}
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-green-500 text-white py-2 px-4 rounded">Add to Cart</button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded">Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
