import React from 'react';

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
    color: string;
    weight: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, color, weight }) => {
    return (
        <div className="grid grid-cols-5 gap-4 items-center border-b pb-4 mb-4">
      <div className="flex items-center col-span-2">
        <div className="w-16 h-16 bg-gray-300 flex items-center justify-center text-xs">Ảnh</div>
        <div className="ml-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">MÀU SẮC: {color}</p>
          <p className="text-sm text-gray-500">TRỌNG LƯỢNG: {weight}</p>
        </div>
      </div>
      <div className="text-center">{price.toFixed(2)} đồng</div>
      <div className="flex items-center justify-center">
        <button className="px-2 py-1 border">-</button>
        <span className="mx-2">{quantity}</span>
        <button className="px-2 py-1 border">+</button>
      </div>
      <div className="text-center">{(price * quantity).toFixed(2)} đồng</div>
    </div>

    );
};

export default CartItem;
