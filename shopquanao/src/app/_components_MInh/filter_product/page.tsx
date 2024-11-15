'use client'
import React, { useState } from 'react'
import Image from 'next/image';
// tạo database 
import mockdatafiler from './data_filter.json';
import { motion } from 'framer-motion';
import ClearIcon from '@mui/icons-material/Clear';
const Filterproduct = () => {
    //khai báo 2 kiểu không thì báo lỗi 
    const [open, setOpen] = useState<number | null>(null);



    // khai báo database
    const data_categories = mockdatafiler.categories;

    const handleclick = (id: number) => {
        // setOpen(!open);
        //null là đang đóng
        // xóa id cũ 
        if (open != id) {
            console.log(`xóa id : ${open}`);

        }

        setOpen(open === id ? null : id);
    }
    return (
        <div className='w-[320px] border border-black'>
            <button
                type='button'
                className=' w-auto border border-gray-300 m-6 px-5 py-1 font-bold '
            >
                <ClearIcon
                    className='pr-1' />
                close
            </button>

            {/*categories*/}
            <div className='grid gird-col-1 gap-4 border border-black  items-center p-4'>
                <h3 className='font-bold text-2xl'>Category</h3>
                <hr />

                {/*list 1*/}
                {data_categories.map(data_categories => (

                    <div key={data_categories.id}
                        className='p-2  rounded-lg shadow-md cursor-pointer'
                        onClick={() => handleclick(data_categories.id)}
                    >
                        <div className='flex items-center gap-4 justify-between'>
                            <div className='flex items-center gap-4' >
                                <Image src={data_categories.image}
                                    alt="image_category"
                                    width={50}
                                    height={200} />
                                <span className="text-gray-800 font-medium">{data_categories.name}</span>
                            </div>
                            {/* lệnh tạo mũi tên hướng lên */}
                            <svg
                                // tạo hiệu ứng ngược chiều
                                // duration là hiệu ứng thời gian xoay
                                className={`w-6 h-6 transform transition-transform duration-500 ${open == data_categories.id ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round" // làm tròn đầu các góc
                                    strokeLinejoin="round" // làm tròn các đường giao nhau 
                                    strokeWidth={2} // độ dày 
                                    d="M19 9l-7 7-7-7" // vị trí tọa độ 
                                />
                            </svg>
                        </div>
                        {open === data_categories.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }} // Vị trí đầu
                                animate={{ opacity: 1, height: 'auto' }} // Vị trí cuối
                                exit={{ opacity: 0, height: 0 }} // Vị trí khi thu về
                                transition={{ duration: 1, ease: "easeInOut" }} // Thời gian chuyển đổi
                                className={`overflow-hidden`}
                            >
                                <hr className="my-2 border-gray-300" />

                                {data_categories.subItems.map((subItem, index) => (
                                    <motion.div
                                        key={subItem.id}
                                        initial={{ opacity: 0, y: 20 }} // Vị trí đầu cho từng mục
                                        animate={{ opacity: 1, y: 0 }} // Vị trí cuối cho từng mục
                                        exit={{ opacity: 0, y: 20 }} // Vị trí khi thu về cho từng mục
                                        transition={{
                                            duration: 0.3, // Thời gian chuyển đổi cho mỗi mục
                                            delay: index * 0.1, // Độ trễ để tạo hiệu ứng xuất hiện lần lượt
                                            ease: "easeInOut"
                                        }}
                                        className={`flex items-center gap-4 pt-4`}
                                    >
                                        <Image src={subItem.image} alt="image_category" width={50} height={200} />
                                        <span className="text-gray-800 font-medium">{subItem.name}</span>
                                    </motion.div>
                                ))}

                            </motion.div>
                        )}
                    </div>
                ))}
            </div>


        </div>

    )


}
export default Filterproduct;