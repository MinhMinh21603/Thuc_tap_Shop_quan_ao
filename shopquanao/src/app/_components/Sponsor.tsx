import Image from 'next/image';
import React from 'react';

type Sponsor = {
    image: string;
    alt: string;
    title: string;
    description: string;
};

type SponsorProps = {
    sponsors: Sponsor[];
};

const Sponsor: React.FC<SponsorProps> = ({ sponsors }) => {
    return (
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded p-6 sm:p-8 md:p-10 lg:p-12">
            {sponsors.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 mb-2 bg-gray-200 flex items-center justify-center">
                        <Image
                            src={sponsor.image}
                            alt={sponsor.alt}
                            fill
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 120px"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="font-bold text-base md:text-lg">{sponsor.title}</h2>
                        <p className="text-gray-600 text-xs">From handpicked sellers</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsor;
