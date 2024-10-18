import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BannerLoginProps {
    image: string;
    title: string;
}

const BannerLogin: React.FC<BannerLoginProps> = ({ image, title }) => {
    return (
        <div className="relative h-[300px] bg-gray-300 flex items-center justify-center">
            <Image
                src={image}
                alt="Banner"
                fill
                quality={100}
                className="absolute inset-0 opacity-55 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
            <div className="relative z-30 text-center">
                <h1 className="text-5xl font-bold text-white drop-shadow-md">{title}</h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <Link href="/pages/trang-chu" className="text-xl text-gray-200 font-medium">Home</Link>
                    <span className="text-[#ee2761] font-bold">/</span>
                    <span className="text-xl text-gray-200 font-medium">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default BannerLogin;
