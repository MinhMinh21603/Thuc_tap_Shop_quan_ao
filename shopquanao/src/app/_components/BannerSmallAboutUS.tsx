import Image from 'next/image';
import React from 'react';

interface BannerLoginProps {
    image: string;
}

const BannerSmallAboutUS: React.FC<BannerLoginProps> = ({ image }) => {
    return (
        <div className="relative h-[300px] bg-gray-300 flex items-center justify-center">
            <Image
                src={image}
                alt="Banner"
                fill
                quality={100}
                className="absolute inset-0 opacity-70 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
            <div className="relative z-30 text-center w-full">
                <div className='grid grid-cols-2 md:grid-cols-4 justify-between gap-4 md:gap-0'>
                    <div className='flex flex-col items-center'>
                        <span className='font-bold text-white text-lg max-w-32'>YEARS OF FOUNDATION</span>
                        <span className='text-3xl text-white font-bold'>50</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-bold text-white text-lg max-w-32'>SKILLED TEAM MEMBERS</span>
                        <span className='text-3xl text-white font-bold'>100</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-bold text-white text-lg max-w-32'>HAPPY CUSTOMERS</span>
                        <span className='text-3xl text-white font-bold'>80</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-bold text-white text-lg max-w-32'>MONTHLY ORDERS</span>
                        <span className='text-3xl text-white font-bold'>70</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSmallAboutUS;
