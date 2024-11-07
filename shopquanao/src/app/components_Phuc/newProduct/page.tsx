// pages/newProducts.tsx
"use client"
import React from 'react';
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
  // const [products] = useState(0);
  const ItemStoShow = 5;
  // tính tổng số sản phẩm trên 1 hàng 
  const totalProduct = Math.ceil(DataProduct.length / ItemStoShow);
  return (
    <div className="container mx-auto p-4">
      <div className=" w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-3xl font-bold">New Products</h1>
        <div className='w-[174px] h-2 bg-gray-500 rounded-lg mt-4'></div>
        <div className="mt-4">
          <button
            type='button'
            className=" text-black py-2 px-4 rounded font-bold hover:text-pink-700 transition duration-300">
            Featured
          </button>
          <button
            type='button'
            className=" text-black py-2 px-4 rounded ml-2 font-bold hover:text-pink-700 transition duration-300">
            Trending
          </button>
          <button
            type='button'
            className=" text-black py-2 px-4 rounded ml-2 font-bold hover:text-pink-700 transition duration-300">
            New Arrival
          </button>
        </div>

      </div>
      <div className="container mx-auto flex flex-col  gap-10 justify-items-center pb-20">
        {[...Array(totalProduct)].map((_, index) => (
          <div key={index} className="flex gap-4">
            {/*logic index = 0 <= 6  thì tăng lên 1 sản phẩm hiện thị  */}
            {DataProduct.slice(index * ItemStoShow, (index + 1) * ItemStoShow).map(DataProduct => (
              <Cart_product
                key={DataProduct.id}
                imageURL={DataProduct.imageURL}
                Titlecategory={DataProduct.Titlecategory}
                Titleproduct={DataProduct.Titleproduct}
                price={DataProduct.price}
                saleActive={DataProduct.isOnSale}
                Ratingstart={DataProduct.Ratingstart}
              />
            ))}

          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
