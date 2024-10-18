"use client";
import React from 'react';

import Image from 'next/image';
import '../style/global.css'
interface CardProps {
    imageURL: string;
    Titlecategory: string;
    Titleproduct: string;
    price: number;
    isOnSale: boolean;
}

const handleAddtocart = () => {
    console.log('add to cart');
}


const Cardproduct: React.FC<CardProps> = ({ imageURL, Titlecategory, Titleproduct, price, isOnSale }) => {
    // bắt sự kiện theo dỗi hover 

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
                {isOnSale &&
                    (
                        <div className="absolute top-2 right-2  text-black px-2 py-1 rounded-md font-bold">
                            Sale
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
                <div className="flex justify-between mt-4">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={handleAddtocart}
                    >
                        Add to Cart</button>
                    <div className="flex space-x-2">
                        <button className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                            🖤
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                            👁️
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cardproduct;