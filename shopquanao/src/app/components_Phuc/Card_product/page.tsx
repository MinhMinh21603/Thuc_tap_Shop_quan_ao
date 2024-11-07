"use client";

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
interface CardProps {
    imageURL: string;
    Titlecategory: string;
    Titleproduct: string;
    price: number;
    saleActive: boolean;
    Ratingstart: number; // 

}

const handleAddtocart = () => {
    console.log('add to cart');
}


const Cardproduct: React.FC<CardProps> = ({ imageURL, Titlecategory, Titleproduct, price, saleActive, Ratingstart }) => {

    return (

        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 h-200">
            <div className="relative w-80 h-64">
                <Image
                    src={imageURL}
                    alt={Titleproduct}
                    width={200}
                    height={201}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110" // Thêm lớp để đảm bảo hình ảnh chiếm toàn bộ không gian
                />
                {saleActive ? (
                    <div className="absolute top-2 left-2 rounded-tl-lg rounded-br-lg text-white px-2 py-1  bg-pink-600 ">
                        Sale
                    </div>

                ) : (
                    <div>

                    </div>
                )
                }
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">{Titlecategory}</h2>
                <p className="text-gray-700 mt-2">{Titleproduct}</p>
                <div className="flex items-center mt-4">
                    <span className="font-bold text-gray-900">{price}</span>
                </div>
                {/*nút đánh giá sao*/}
                {/* tại 1 mảng gồm 5 phần tử  và nhận 2 phần từ callback*/}
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`text-2xl ${index < Ratingstart ? 'text-yellow-500' : 'text-gray-300'}`} ><StarIcon /></span>
                ))}
                <div className="flex justify-start mt-4 gap-4">
                    <button
                        type='button'
                        className=" w-full bg-white border border-gray-300 text-gray-600 hover:bg-pink-600 hover:text-white  p-2 gap-2 rounded"
                        onClick={handleAddtocart}
                    >
                        <ShoppingCartOutlinedIcon />
                        +
                        Add to Cart</button>
                    <button
                        type='button'
                        className="bg-white border border-gray-300 hover:bg-pink-600 hover:text-white font-bold py-2 px-4 rounded"
                        aria-label='button favorite'>
                        <FavoriteBorderIcon />
                    </button>
                    <button type='button'
                        className="bg-white border border-gray-300 hover:bg-pink-600 hover:text-white font-bold py-2 px-4 rounded"
                        aria-label='button wishlist'>
                        <VisibilityIcon />
                    </button>
                </div>
            </div>
        </div >

    )
}
export default Cardproduct;