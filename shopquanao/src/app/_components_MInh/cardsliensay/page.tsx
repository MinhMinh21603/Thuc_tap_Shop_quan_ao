"use client";
import React from 'react'
// import { useState } from 'react';
import Image from 'next/image';
import '../style/global.css'

interface CardProps {
    // idCard: number;
    imageURl: string;
    titleNameSlien: string;
    titleProductSlien: string;
    // startrating: number;

}
// import { render } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { App } from './App'
// import { rootReducer } from './store/reducers/rootReducer'
// import { initialState } from './store/reducers/rootReducer'

const Cart_sliensay: React.FC<CardProps> = ({ imageURl, titleNameSlien, titleProductSlien }) => {

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


            {/* 
            tạo sao hiện tại chưa làm vì đang bị rối 
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mt-4">
                <svg className="w-1 h-1 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.865L19.335 24 12 19.902 4.665 24 6 15.615 0 9.75l8.332-1.595z" />
                </svg>

                <span className="ml-2 text-gray-600">(4.0)</span>
            </div> */}

        </div>
    )
}
export default Cart_sliensay;
