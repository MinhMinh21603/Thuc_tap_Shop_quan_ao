"use client";
import React from 'react'
// import { useState } from 'react';
import Image from 'next/image';
import '../style/global.css'
import StarIcon from '@mui/icons-material/Star';
interface CardProps {
    idCard: number;
    imageURl: string;
    titleNameSlien: string;
    titleProductSlien: string;
    rating: number;

}
// import { render } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { App } from './App'
// import { rootReducer } from './store/reducers/rootReducer'
// import { initialState } from './store/reducers/rootReducer'

const Cart_sliensay: React.FC<CardProps> = ({ imageURl, titleNameSlien, titleProductSlien, rating }) => {

    // // lấy rating hiện tại từ mock 
    // const [rating, setrating] = useState(() => {
    //     const userating = Cardproduct.find((item) => item.idCard === idCard);
    //     return userating ? userating.startrating : 0;
    // )



    return (
        <div className='bg-white rounded-lg shadow-md p-6 w-80 h-auto flex flex-col items-center justify-center'>
            <div className='flex items-center mb-4 '>
                <Image
                    src={imageURl}
                    alt={titleNameSlien}
                    width={70}
                    height={70}
                    className='rounded-full mr-4 '
                />
            </div>
            <div className='flex flex-col items-center text-center'>
                <h2 className=' mx-auto text-lg font-bold'>{titleNameSlien}</h2>
                <p className=' mx-auto text-xs text-gray-500'>fashion</p>
                <p className='pt-2 w-30 text-xs text-gray-500 '>{titleProductSlien}</p>
            </div>
            {/* tạo sao theo đánh giá*/}
            <div className='flex'>
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`text-2x1 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} ><StarIcon /></span>
                ))}
            </div>

        </div>
    )
}
export default Cart_sliensay;
