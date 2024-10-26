import React from 'react';

// Định nghĩa kiểu cho props
interface CartSummaryProps {
  total: number; // Tổng giá trị giỏ hàng
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Phiếu giảm giá</h3>
      <p className="text-sm text-gray-500">Nhập mã phiếu giảm giá nếu bạn có.</p>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Mã giảm giá"
          className="w-full p-2 border border-gray-300 rounded-l-md"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md">Áp dụng</button>
      </div>
      <h3 className="text-xl font-semibold mb-4">Ghi chú</h3>
      <p className="text-sm text-gray-500">Thêm hướng dẫn đặc biệt cho người bán của bạn...</p>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Thêm hướng dẫn..."
      ></textarea>
      <div className="my-6">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">TỔNG CỘNG</span>
          <span>{total.toLocaleString()} đồng</span> {/* Hiển thị tổng */}
        </div>
        <p className="text-sm text-gray-500">Phí vận chuyển và thuế sẽ được tính khi thanh toán</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md">Cập nhật giỏ hàng</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Kiểm tra</button>
      </div>
    </div>
  );
};

export default CartSummary;
