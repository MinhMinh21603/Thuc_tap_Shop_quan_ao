// import Card from './card/page';
"use client";
import React, { useState } from "react";
import './style/global.css'
import CardProduct from './card/page'
import CardSliensay from './cardsliensay/page' //import card sliensay 
import { useSwipeable } from "react-swipeable"; // import hiệu ứng kéo
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const DataProduct = [
    {
        id: 1,
        imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
        Titlecategory: 'jean,ngắn',
        Titleproduct: 'quần jean hook',
        price: 19000,
        isOnSale: true,
        Ratingstart: 2
    },
    {
        id: 2,
        imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
        Titlecategory: 'jean,ngắn',
        Titleproduct: 'quần jean hook',
        price: 19000,
        isOnSale: true,
        Ratingstart: 2
    },
    {
        id: 3,
        imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
        Titlecategory: 'jean,ngắn',
        Titleproduct: 'quần jean hook',
        price: 19000,
        isOnSale: true,
        Ratingstart: 2
    },

    {
        id: 4,
        imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
        Titlecategory: 'jean,ngắn',
        Titleproduct: 'quần jean hook',
        price: 19000,
        isOnSale: false,
        Ratingstart: 2
    },
    {
        id: 5,
        imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
        Titlecategory: 'jean,ngắn',
        Titleproduct: 'quần jean hook',
        price: 19000,
        isOnSale: true,
        Ratingstart: 2
    }

]
const mocksliensay = [
    {
        id: 1,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 2,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 3,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 4,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 5,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 6,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 7,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },
    {
        id: 8,
        imageURL: "https://i.pinimg.com/236x/ce/4f/3e/ce4f3e2e41e7bf8715400de9b34a5b61.jpg",
        titleNameSlien: 'Neko John',
        titleProductSlien: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        rating: 3,
    },

]
export default function Home() {
    const [startIndex, setStarIndex] = useState(0);
    // const [PageIndex, setPageIndex] = useState(0);
    // show 4 item
    const itemsToShow = 4;
    // tổng các database
    // const totalData = Math.ceil(mocksliensay.length / itemsToShow);
    // tạo hàm cập nhật khi người dùng click vào điều hướng 
    // const handlePageChange = (index: number) => {
    //     setPageIndex(index);
    // }
    // const loadMore = () => {
    //     setStarIndex(prevIndex => prevIndex + itemsToShow);
    // };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (startIndex + 1 < mocksliensay.length) {
                setStarIndex(prevIndex => prevIndex + 1);
            }
        },
        onSwipedRight: () => {
            if (startIndex - 1 >= 0) {
                setStarIndex(prevIndex => prevIndex - 1);
            }
        },
        trackMouse: true,
    });

    return (
        // Our Best Seller
        <div className='container mx-auto'>
            <div className='w-full  bg-white  justify-center items-start p-4'>
                <h2 className='text-center font-bold text-2xl'>Our Best Seller</h2>
                <hr className='my-4 h-1 w-40 border-gray-500 mx-auto' />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center pb-20 ">
                {DataProduct.slice(startIndex, startIndex + itemsToShow).map(DataProduct => (
                    <CardProduct
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


            <div className='w-full h-40 grid grid-cols-1 md:grid-cols-2 gap-20 py-5'>
                <div className='relative w-full md:w-[746px] h-[281px] bg-cover bg-center flex flex-col p-6' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/7e/03/3e/7e033e5cc63015a919ebf761fd351dc6.jpg")' }}>
                    <h3 className='text-lg font-bold mb-4 text-gray-400'>Pick Your Items</h3>
                    <h3 className='text-2xl font-bold mb-2'>Up to 25% Off Order Now</h3>
                    <a href="#" className='text-gray-400 hover:underline hover:text-pink-700'>Show now</a>
                </div>
                <div className='relative w-full md:w-[746px] h-[281px] bg-cover bg-center flex flex-col p-6' style={{ backgroundImage: 'url("https://i.pinimg.com/736x/7e/03/3e/7e033e5cc63015a919ebf761fd351dc6.jpg")' }}>
                    <h3 className='text-lg font-bold mb-4 text-gray-400'>Pick Your Items</h3>
                    <h3 className='text-2xl font-bold mb-2'>Up to 25% Off Order Now</h3>
                    <a href="#" className='text-gray-400 hover:underline hover:text-pink-700'>Show now</a>
                </div>
            </div>

            <div >
                <div className='w-full  bg-white  justify-center items-start pt-20 mt-32'>
                    <h2 className='text-center font-bold text-2xl'>Our Best Seller</h2>
                    <hr className='my-4 h-1 w-40 border-gray-500 mx-auto' />
                </div>
                <div className=" container flex flex-col items-center no-select scroll-container"  {...swipeHandlers}>
                    <div className=' flex transition-transform duration-500 ease-out'
                        style={{
                            transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
                            transition: swipeHandlers ? 'transform 0.5s ease' : 'none',

                        }}
                    >
                        {mocksliensay.map((item, index) => (

                            <CardSliensay
                                key={index}
                                idCard={item.id}
                                imageURl={item.imageURL}
                                titleNameSlien={item.titleNameSlien}
                                titleProductSlien={item.titleProductSlien}
                                rating={item.rating}
                                className="w-[32%] md:w-[48%] sm:w-full mx-2"
                            />

                        ))}
                    </div>
                    {/* tạo nút điều hướng */}
                    {/* <div className="flex justify-center space-x-2 p-3" >
                        {Array.from({ length: totalData }).map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                aria-label="circle"
                                onClick={() => handlePageChange(index)}
                                className={`${PageIndex === index ? ' text-white' : ' text-black'}`}
                            >
                                <CircleOutlinedIcon />

                            </button>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>






    );


};