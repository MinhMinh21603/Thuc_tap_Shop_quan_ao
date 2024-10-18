// import Card from './card/page';
"use client";
import React, { useRef, useState } from "react";
import './style/global.css'
import CardProduct from './card/page' // import card
import CardSliensay from './cardsliensay/page' //import card sliensay 
import { useSwipeable } from "react-swipeable"; // import hiệu ứng kéo

const DataProduct = [
  {
    id: 1,
    imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
  },
  {
    id: 2,
    imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
  },
  {
    id: 3,
    imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
  },

  {
    id: 4,
    imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: false,
  },
  {
    id: 5,
    imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
    Titlecategory: 'jean,ngắn',
    Titleproduct: 'quần jean hook',
    price: 19000,
    isOnSale: true,
  }

]
const mocksliensay = [
  {
    id: 1,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 2,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 3,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 4,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 5,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 6,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 7,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    id: 8,
    imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
    titleNameSlien: 'Neko John',
    titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },

]
export default function Home() {
  const [startIndex] = useState(0);
  // const carouseRef

  // vì usestate chỉ dùng trong function componnent không được để ngoài không cập nhật usestate
  // điều hướng next
  // bắt sự kiện kéo ngang
  // const swipeHandlers = useSwipeable({
  //   trackMouse: true, // cho phep keo bang chuot
  //   preventDefaultTouchmoveEvent: true,
  //   onSwipedLeft: handleNext,
  //   onSwipedRight: handlePrev,
  // })

  return (
    // Our Best Seller
    <div className='w-screen px-11'>
      <div className='w-full  bg-white  justify-center items-start p-4'>
        <h2 className='text-center font-bold text-2xl'>Our Best Seller</h2>
        <hr className='my-4 h-1 w-40 border-gray-500 mx-auto' />
      </div>

      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center pb-20 ">
        {DataProduct.slice(0, 4).map(DataProduct => (
          <CardProduct
            key={DataProduct.id}
            imageURL={DataProduct.imageURL}
            Titlecategory={DataProduct.Titlecategory}
            Titleproduct={DataProduct.Titleproduct}
            price={DataProduct.price}
          />
        ))}
      </div>


      <div className=' w-full h-40 grid grid-cols-1 md:grid-cols-2 gap-20  py-5'>
        <div className='relative w-full  md:w-746 h-281 bg-cover bg-center flex flex-col p-6  ' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/7e/03/3e/7e033e5cc63015a919ebf761fd351dc6.jpg")' }}>
          <h3 className='text-lg font-bold mb-4 text-gray-400'>Pick Your Items</h3>
          <h3 className='text-2xl font-bold mb-2'>Up to 25% Off Order Now</h3>
          <a href="#" className='text-gray-400 hover:underline hover:text-pink-700'>Show now</a>
        </div>
        <div className='relative w-full  md:w-746 h-281 bg-cover bg-center flex flex-col p-6  ' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/7e/03/3e/7e033e5cc63015a919ebf761fd351dc6.jpg")' }}>
          <h3 className='text-lg font-bold mb-4 text-gray-400'>Pick Your Items</h3>
          <h3 className='text-2xl font-bold mb-2'>Up to 25% Off Order Now</h3>
          <a href="#" className='text-gray-400 hover:underline hover:text-pink-700'>Show now</a>
        </div>
      </div>

      <div >
        <div className='relative w-full  bg-white  justify-center items-start pt-20'>
          <h2 className='text-center font-bold text-2xl'>Our Best Seller</h2>
          <hr className='my-4 h-1 w-40 border-gray-500 mx-auto' />
        </div>
        <div className=" container flex flex-col items-center">
          <div className=' flex justify-between w-full overflow-x-auto'
          // {...swipeHandlers} // cho chúng ta kéo ngang 
          >
            {mocksliensay.slice(startIndex, startIndex + 4).map((item) => (

              <CardSliensay
                key={item.id}
                imageURl={item.imageURL}
                titleNameSlien={item.titleNameSlien}
                titleProductSlien={item.titleProductSlien}
              />



            ))}

          </div>
        </div>
      </div>
    </div>






  );


};