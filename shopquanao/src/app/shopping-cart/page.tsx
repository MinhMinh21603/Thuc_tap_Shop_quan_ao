import React from 'react';
import FormCart from '../_component_Vnhan/ShoppinCart/FromCart';
import BannerLogin from '../_components/BannerLogin';

const products = [
  { id: 1, name: 'Cá tươi nguyên con', price: 65.0, quantity: 2, color: 'Xanh lam', weight: '2 Kg' },
  { id: 2, name: 'Rau củ quả lành mạnh', price: 65.0, quantity: 2, color: 'Xanh lam', weight: '2 Kg' },
  { id: 3, name: 'Hành tây sống-bẻ mặt', price: 65.0, quantity: 2, color: 'Xanh lam', weight: '2 Kg' },
  { id: 4, name: 'Váy Cotton Oversize', price: 65.0, quantity: 2, color: 'Xanh lam', weight: '2 Kg' },
];

const CartPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <BannerLogin title="Account Login" image="/testBanner.jpg" />
      <div className="container mx-auto py-10 px-4 sm:px-20 lg:px-44 bg-white text-black">
        <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
        <FormCart products={products} />
      </div>
    </div>
  );
};

export default CartPage;
