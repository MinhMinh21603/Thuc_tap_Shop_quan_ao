"use client"
import React, { useState, useEffect } from 'react'

import '../style/global.css'
import Pageproduct from '../card/page';
import Cardproduct from '../card/page_list';
import SegmentIcon from '@mui/icons-material/Segment';
import ReorderIcon from '@mui/icons-material/Reorder';
import WindowIcon from '@mui/icons-material/Window';

const handleChange = () => {
    console.log("hello");
}
const Product = () => {

    const [selectButton, setSelectButton] = useState('button_list');
    const [isSaleActive, setSaleActive] = useState(false);

    // sử dụng useeffect để tự động cập nhật 
    useEffect(() => {
        // thay đổi trạng thái 
        const timer = setTimeout(() => {
            setSaleActive(!isSaleActive);
        }, 5000);
        // don5 dẹp timer

        return () => clearTimeout(timer);
    }, [isSaleActive]);
    const DataProduct = [
        {
            id: 1,
            imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
            Titlecategory: 'jean,ngắn',
            Titleproduct: 'quần jean hook',
            Titlename: 'jean nhap khau tu trung quoc',
            price: 19000,
            isOnSale: true,
            Ratingstart: 2,
        },
        {
            id: 2,
            imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
            Titlecategory: 'jean,ngắn',
            Titleproduct: 'quần jean hook',
            Titlename: 'jean nhap khau tu trung quoc',
            price: 19000,
            isOnSale: true,
            Ratingstart: 2,
        },
        {
            id: 3,
            imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
            Titlecategory: 'jean,ngắn',
            Titleproduct: 'quần jean hook',
            Titlename: 'jean nhap khau tu trung quoc',
            price: 19000,
            isOnSale: true,
            Ratingstart: 2,
        },

        {
            id: 4,
            imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
            Titlecategory: 'jean,ngắn',
            Titleproduct: 'quần jean hook',
            Titlename: 'jean nhap khau tu trung quoc',
            price: 19000,
            isOnSale: false,
            Ratingstart: 2,
        },
        {
            id: 5,
            imageURL: 'https://i.pinimg.com/236x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg',
            Titlecategory: 'jean,ngắn',
            Titleproduct: 'quần jean hook',
            Titlename: 'jean nhap khau tu trung quoc',
            price: 19000,
            isOnSale: true,
            Ratingstart: 2,
        }

    ]

    return (
        <div>
            < header >
                <div className='w-auto  bg-white py-2 shadow-md flex  items-center'>
                    {/* Nút Filter */}
                    <div className='flex items-center mr-4 '>
                        <button className=' mr-4 flex items-center p-2 border border-transparent border-gray-400 hover:border-pink-700 hover:text-pink-700 hover:bg-white transition'>
                            <SegmentIcon
                                className=' fill-none stroke-current mr-2'
                            />
                            <span>Filter</span>
                        </button>

                    </div>
                    {/* nút Pre Page*/}
                    <div className='flex items-center mr-4 p-2'>
                        <label htmlFor='Page' className='mr-4 font-bold'>Prev Page :</label>
                        <select name="Frev Page" id="Page" className='items-center w-auto border border-gray-400 p-1' onChange={handleChange}>
                            <option value="65" selected>65</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                            <option value="57">57</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    {/* nút Sort By*/}
                    <div className='flex items-center mr-4 p-2'>
                        <label htmlFor='Sort' className='mr-4 font-bold'>Sort By :</label>
                        <select name="SortBy" id="Sort" className='items-center w-auto border border-gray-400 p-2'>
                            <option value="Sory By Latest">Sory By Latest</option>
                            <option value="Sort By popularity">Sort By popularity</option>
                            <option value="Sort By newness">Sort By newness</option>
                            <option value="Sort By Rating">Sort By Rating</option>

                        </select>
                    </div>
                    {/* Nút list và nút Gird*/}
                    <div className='flex items-center space-x-3 '>
                        <button
                            type='button'
                            id='button_list'
                            value={'button_list'}
                            className={`p-2 border transition  ${selectButton === "button_list" ? 'border-pink-700 bg-white text-pink-700' : 'border-gray-200 bg-white text-black'}`}
                            onClick={() => setSelectButton('button_list')}
                            aria-label='Button list' // mổ ta3 nút mà ko cần hiện thị văn bản 
                        >

                            <ReorderIcon />
                        </button>

                        <button
                            type='button'
                            id='button_grid'
                            value={'button_grid'}
                            className={`p-2 border ${selectButton === "button_grid" ? 'border-pink-700 bg-white text-pink-700' : 'border-gray-200 bg-white text-black'}`}
                            onClick={() => setSelectButton('button_grid')}
                            aria-label='button grid'
                        >
                            <WindowIcon />
                        </button>
                    </div>

                </div>

            </header >
            {/*content display*/}
            <div className={selectButton === 'button_list' ? 'grid grid-cols-4 gap-4' : 'list space-y-2'}>
                {DataProduct.map((DataProduct) => (
                    <div key={DataProduct.id}>
                        {selectButton === 'button_grid' ? (
                            // Card layout for grid view
                            <Cardproduct
                                key={DataProduct.id}
                                imageURL={DataProduct.imageURL}
                                Titlecategory={DataProduct.Titlecategory}
                                Titleproduct={DataProduct.Titleproduct}
                                Titlename={DataProduct.Titlename}
                                price={DataProduct.price}
                            />
                        ) : (
                            // Card layout for list view
                            <Pageproduct
                                key={DataProduct.id}
                                imageURL={DataProduct.imageURL}
                                Titlecategory={DataProduct.Titlecategory}
                                Titleproduct={DataProduct.Titleproduct}
                                price={DataProduct.price}
                                saleActive={DataProduct.isOnSale}
                                Ratingstart={DataProduct.Ratingstart}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Product;