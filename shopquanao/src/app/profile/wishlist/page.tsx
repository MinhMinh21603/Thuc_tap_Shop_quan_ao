import React from 'react';
import WishlistItem from '../../_component_Vnhan/wishlist/wishlist';

const Wishlist = () => {
  const wishlistProducts = [
    {
      name: 'Fresh-whole-fish',
      color: 'Blue',
      weight: '2 Kg',
      price: '£65.00',
      stockStatus: 'in stock',
    },
    {
      name: 'Vegetable-healthy',
      color: 'Blue',
      weight: '2 Kg',
      price: '£65.00',
      stockStatus: 'in stock',
    },
    {
      name: 'Raw-onions-surface',
      color: 'Blue',
      weight: '2 Kg',
      price: '£65.00',
      stockStatus: 'in stock',
    },
    {
      name: 'Oversize Cotton Dress',
      color: 'Blue',
      weight: '2 Kg',
      price: '£65.00',
      stockStatus: 'in stock',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white rounded-md shadow-md p-8 max-w-5xl w-full">
        <h1 className="text-3xl font-bold mb-8">Wishlist</h1>
        <div className="flex justify-between text-sm font-bold text-gray-600 border-b pb-4">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>STOCK STATUS</span>
          <span>ADD TO CART</span>
        </div>
        {wishlistProducts.map((product, index) => (
          <WishlistItem key={index} product={product} />
        ))}
        <div className="flex justify-between mt-6">
          <a href="#" className="text-pink-500 underline">Continue shopping</a>
          <a href="#" className="text-pink-500 underline">View All Products</a>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
