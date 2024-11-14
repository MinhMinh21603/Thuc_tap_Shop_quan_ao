'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image';

const Filterproduct = () => {
    //khai báo 2 kiểu không thì báo lỗi 
    const [open, setOpen] = useState<number | null>(null);
    // hiệu ứng mở thêm lựa chọn
    const listRef = useRef(null);

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
                type='button'>
                close
            </button>

            {/*categories*/}
            <div className='grid gird-col-1 gap-4 border border-black  items-center p-4'>
                <h2>category</h2>
                <hr />

                {/*list 1*/}
                <div className='p-2  rounded-lg shadow-md cursor-pointer'
                    onClick={() => handleclick(1)}
                >
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-4' >
                            <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                alt="image_category"
                                width={50}
                                height={200} />
                            <span className="text-gray-800 font-medium">Denim Jacket</span>
                        </div>
                        {/* lệnh tạo mũi tên hướng lên */}
                        <svg
                            // tạo hiệu ứng ngược chiều
                            // duration là hiệu ứng thời gian xoay
                            className={`w-6 h-6 transform transition-transform duration-500 ${open == 1 ? 'rotate-180' : ''}`}
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
                    {open && (
                        <div
                            ref={listRef}
                            className={`overflow-hidden transition-all duration-500 ${open == 1 ? 'max-h-[500]' : 'max-h-0'}`}>
                            <ul>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 1 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 1 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 1 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/*list 2*/}
                <div className='p-2  rounded-lg shadow-md cursor-pointer'
                    onClick={() => handleclick(2)}
                >
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-4' >
                            <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                alt="image_category"
                                width={50}
                                height={200} />
                            <span className="text-gray-800 font-medium">Denim Jacket</span>
                        </div>
                        {/* lệnh tạo mũi tên hướng lên */}
                        <svg
                            // tạo hiệu ứng ngược chiều
                            // duration là hiệu ứng thời gian xoay
                            className={`w-6 h-6 transform transition-transform duration-500 ${open == 2 ? 'rotate-180' : ''}`}
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
                    {open && (
                        <div className={`overflow-hidden transition-all duration-500 ${open == 2 ? 'max-h-[500]' : 'max-h-0'}`}>
                            <ul>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 2 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 2 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 2 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/*list 3*/}
                <div className='p-2  rounded-lg shadow-md cursor-pointer'
                    onClick={() => handleclick(3)}
                >
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-4' >
                            <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                alt="image_category"
                                width={50}
                                height={200} />
                            <span className="text-gray-800 font-medium">Denim Jacket</span>
                        </div>
                        {/* lệnh tạo mũi tên hướng lên */}
                        <svg
                            // tạo hiệu ứng ngược chiều
                            // duration là hiệu ứng thời gian xoay
                            className={`w-6 h-6 transform transition-transform duration-500 ${open == 3 ? 'rotate-180' : ''}`}
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
                    {open && (
                        <div className={`overflow-hidden transition-all duration-500 ${open == 3 ? 'max-h-[500]' : 'max-h-0'}`}>
                            <ul>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 3 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 3 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 3 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/*list 4*/}
                <div className='p-2  rounded-lg shadow-md cursor-pointer'
                    onClick={() => handleclick(4)}
                >
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-4' >
                            <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                alt="image_category"
                                width={50}
                                height={200} />
                            <span className="text-gray-800 font-medium">Denim Jacket</span>
                        </div>
                        {/* lệnh tạo mũi tên hướng lên */}
                        <svg
                            // tạo hiệu ứng ngược chiều
                            // duration là hiệu ứng thời gian xoay
                            className={`w-6 h-6 transform transition-transform duration-500 ${open == 4 ? 'rotate-180' : ''}`}
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
                    {open && (
                        <div className={`overflow-hidden transition-all duration-500 ${open == 4 ? 'max-h-[500]' : 'max-h-0'}`}>
                            <ul>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 4 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 4 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 4 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/*list 5*/}
                <div className='p-2  rounded-lg shadow-md cursor-pointer'
                    onClick={() => handleclick(5)}
                >
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex items-center gap-4' >
                            <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                alt="image_category"
                                width={50}
                                height={200} />
                            <span className="text-gray-800 font-medium">Denim Jacket</span>
                        </div>
                        {/* lệnh tạo mũi tên hướng lên */}
                        <svg
                            // tạo hiệu ứng ngược chiều
                            // duration là hiệu ứng thời gian xoay
                            className={`w-6 h-6 transform transition-transform duration-500 ${open == 5 ? 'rotate-180' : ''}`}
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
                    {open && (
                        <div className={`overflow-hidden transition-all duration-500 ${open == 5 ? 'max-h-[500]' : 'max-h-0'}`}>
                            <ul>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 5 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 5 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                                <li className={` flex items-center gap-4 pt-4 transition-opacity duration-500 ${open == 5 ? 'opacity-1' : 'opacity-0'}`}>
                                    <Image src="https://i.pinimg.com/564x/59/f0/d0/59f0d0067c5d04c5db5f92f517767002.jpg"
                                        alt="image_category"
                                        width={50}
                                        height={200} />
                                    <span className="text-gray-800 font-medium">Denim Jacket</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>

    )


}
export default Filterproduct;