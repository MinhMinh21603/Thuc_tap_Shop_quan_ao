import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  weight: string;
}

interface FormCartProps {
  products: Product[];
}

const FormCart: React.FC<FormCartProps> = ({ products }) => {
  // Calculate total cart value
  const calculateTotal = (): number => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
      <div className="lg:col-span-2 p-4 border border-gray-200 rounded-lg">
        {/* Column headers */}
        <div className="grid grid-cols-5 font-semibold border-b pb-2 mb-4">
          <div className="text-center col-span-2">Sản phẩm</div >
          <div className="text-center">Giá</div>
          <div className="text-center">Số lượng</div>
          <div className="text-center">Tổng cộng</div>
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-4 text-center">Giỏ hàng trống</div>
        )}

        <div className="flex justify-between mt-4">
          <button className="text-pink-500">Tiếp tục mua sắm</button>
          <button className="text-pink-500">Xóa giỏ hàng</button>
        </div>
      </div>

      {/* Cart summary */}
      <CartSummary total={calculateTotal()} />
    </div>
  );
};

export default FormCart;
