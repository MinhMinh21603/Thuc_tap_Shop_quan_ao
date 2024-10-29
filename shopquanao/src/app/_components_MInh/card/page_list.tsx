import React from 'react';

import Image from 'next/image';
import '../style/global.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface CardProp {
    imageURL: string;
    Titlecategory: string;
    Titleproduct: string;
    Titlename: string;
    price: number;

}

const Pagelist: React.FC<CardProp> = ({ imageURL, Titlecategory, Titleproduct, Titlename, price }) => {
    return (
        <div className='w-screen h-50 p-6'>
            <div className='grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2'> {/* Thay đổi grid để cột thứ nhất chỉ vừa với hình ảnh */}
                {/* Cột 1: Hình ảnh */}
                <Image
                    src={imageURL}
                    alt={Titleproduct}
                    width={310}
                    height={290}
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />

                {/* Cột 2: Nội dung sản phẩm */}
                <div className='ml-2  ' >
                    <span >{Titlecategory}</span>
                    <h1 className="text-2xl font-bold mb-2">{Titleproduct}</h1>
                    <div className="text-gray-600 mb-2">
                        <span className="text-lg font-bold">{price}</span>
                    </div>

                    <div className="mt-10">
                        <p className="text-gray-600">
                            {Titlename}
                        </p>
                    </div>
                    <div className='w-15 flex justify-normal mt-10 gap-3 '>
                        <button className=" underline-none border border-gray-600  p-2 rounded-sm text-gray-500 hover:bg-pink-600 underline hover:text-white hover:border-white transition-colors duration-300 ">
                            .<ShoppingCartIcon />

                        </button>
                        <button className='border border-gray-600  p-2 rounded-sm text-gray-500 hover:bg-pink-600 underline hover:text-white hover:border-white transition-colors duration-300 '>
                            . <FavoriteBorderIcon />

                        </button>
                        <button className='border border-gray-600  p-2 rounded-sm text-gray-500 hover:bg-pink-600 underline hover:text-white hover:border-white transition-colors duration-300 '>
                            .<RemoveRedEyeIcon />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Pagelist;