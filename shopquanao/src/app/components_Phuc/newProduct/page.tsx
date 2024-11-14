// pages/newProducts.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Cart_product from '../Card_product/page';

const DataProduct = [
  {
    id: 1,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
    Ratingstart: 2
  },
  {
    id: 2,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
    Ratingstart: 2
  },
  {
    id: 3,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
    Ratingstart: 2
  },

  {
    id: 4,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },
  {
    id: 5,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
    Ratingstart: 2
  },
  {
    id: 6,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },
  {
    id: 7,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },
  {
    id: 8,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },
  {
    id: 9,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },
  {
    id: 10,
    imageURL: 'https://i.pinimg.com/564x/34/ec/5c/34ec5c4a7cb98abdcaeca4dd2aa5bd84.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
    Ratingstart: 2
  },


]
const NewProducts = () => {
  const [ItemStoShow, setItemStoShow] = useState(5); // Mặc định là 5 sản phẩm trên một hàng

  // Tính tổng số hàng cần để hiển thị tất cả sản phẩm
  const totalProduct = Math.ceil(DataProduct.length / ItemStoShow);

  // Sử dụng useEffect để lắng nghe sự thay đổi kích thước màn hình và cập nhật số sản phẩm hiển thị
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1550) {
        setItemStoShow(4); // Hiển thị 4 sản phẩm mỗi hàng nếu chiều rộng màn hình dưới 1550px
      } else {
        setItemStoShow(5); // Hiển thị 5 sản phẩm mỗi hàng nếu chiều rộng màn hình trên 1550px
      }
    };

    // Gọi hàm để kiểm tra kích thước ngay khi component được render
    handleResize();

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener('resize', handleResize);

    // Gỡ sự kiện khi component unmount để tránh rò rỉ bộ nhớ
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-3xl font-bold">New Products</h1>
        <div className="w-[174px] h-2 bg-gray-500 rounded-lg mt-4"></div>
        <div className="mt-4">
          <button
            type='button'
            className="text-black py-2 px-4 rounded font-bold hover:text-pink-700 transition duration-300">
            Featured
          </button>
          <button
            type='button'
            className="text-black py-2 px-4 rounded ml-2 font-bold hover:text-pink-700 transition duration-300">
            Trending
          </button>
          <button
            type='button'
            className="text-black py-2 px-4 rounded ml-2 font-bold hover:text-pink-700 transition duration-300">
            New Arrival
          </button>
        </div>
      </div>

      <div className="container mx-auto pb-20">
        {[...Array(totalProduct)].map((_, index) => (
          <div key={index} className="flex flex-wrap justify-between">
            {DataProduct.slice(index * ItemStoShow, (index + 1) * ItemStoShow).map(product => (
              <Cart_product
                key={product.id}
                imageURL={product.imageURL}
                Titlecategory={product.Titlecategory}
                Titleproduct={product.Titleproduct}
                price={product.price}
                saleActive={product.isOnSale}
                Ratingstart={product.Ratingstart}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
