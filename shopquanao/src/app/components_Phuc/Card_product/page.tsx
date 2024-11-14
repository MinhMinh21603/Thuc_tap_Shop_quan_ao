"use client";

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css';
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
    Ratingstart: number;
}

const handleAddtocart = () => {
    console.log('add to cart');
}

const Cardproduct: React.FC<CardProps> = ({ imageURL, Titlecategory, Titleproduct, price, saleActive, Ratingstart }) => {
    return (
        <div className="bg-white shadow-md overflow-hidden w-72 max-w-xs group">
        <div className="relative w-full h-[310px] overflow-hidden group lg:h-[275px] xl:w-full xl:h-[310px]">
            <Image
                src={imageURL}
                alt={Titleproduct}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {saleActive && (
                <div className="absolute top-6 left-4 bg-backgroundPink text-white text-xs font-bold px-2 py-1 rounded">
                    Sale
                </div>
            )}
        </div>
    <div className="py-4 px-2">
        <h2 className="text-sm text-gray-500">{Titlecategory}</h2>
        <p className="text-lg font-semibold text-gray-900 mt-1">{Titleproduct}</p>
        
        <div className="flex items-center mt-2 space-x-2">
            <span className="text-sm text-gray-400">${price}</span>
            <span className="text-gray-400">—</span>
            <span className="text-sm text-gray-400 line-through">${75}</span>
        </div>

        <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                    key={index}
                    className={`text-xl ${index < Ratingstart ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            ))}
        </div>

        <div className="flex justify-between mt-4">
            <button
                type="button"
                className="flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-backgroundPink hover:text-white py-4 rounded-md gap-2 transition-colors duration-300 w-1/2"
                onClick={handleAddtocart}
            >
                <ShoppingCartOutlinedIcon fontSize="small" />
                <span className="text-sm ">+ Add to Cart</span>
            </button>
            <button
                type="button"
                className="bg-white border border-gray-300 hover:bg-backgroundPink hover:text-white p-2 rounded-md transition-colors duration-300 w-1/5"
                aria-label="button favorite"
            >
                <FavoriteBorderIcon fontSize="small" />
            </button>
            <button
                type="button"
                className="bg-white border border-gray-300 hover:bg-backgroundPink hover:text-white p-2 rounded-md transition-colors duration-300 w-1/5"
                aria-label="button wishlist"
            >
                <VisibilityIcon fontSize="small" />
            </button>
        </div>
    </div>
</div>
    );
}

export default Cardproduct;