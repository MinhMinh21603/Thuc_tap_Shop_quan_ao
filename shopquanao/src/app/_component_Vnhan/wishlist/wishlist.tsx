import React from 'react';

interface WishlistItemProps {
  product: {
    name: string;
    color: string;
    weight: string;
    price: string;
    stockStatus: string;
  };
}

const WishlistItem: React.FC<WishlistItemProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <button className="mr-4">
          <span className="text-2xl">✖</span>
        </button>
        <div className="w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-500">282x210</span>
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{product.name}</h3>
          <p>COLOR: {product.color}</p>
          <p>WEIGHT: {product.weight}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold">{product.price}</p>
        <p className="text-pink-500">{product.stockStatus}</p>
      </div>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md ml-6">
        Add To Cart
      </button>
    </div>
  );
};

export default WishlistItem;
