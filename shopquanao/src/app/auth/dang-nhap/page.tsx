import BannerLogin from "@/app/_components/BannerLogin";
import FormLogin from "@/app/_components/FormLogin";
import FormRegister from "@/app/_components/FormRegister";
import Sponsor from "@/app/_components/Sponsor";
import React from "react";

const sponsors = [
    {
        image: '/sponsor.jpg',
        alt: 'Sponsor 1',
        title: 'Shipping',
        description: 'From handpicked sellers',
    },
    {
        image: '/sponsor.jpg',
        alt: 'Sponsor 2',
        title: 'Payment',
        description: 'From handpicked sellers',
    },
    {
        image: '/sponsor.jpg',
        alt: 'Sponsor 3',
        title: 'Return',
        description: 'From handpicked sellers',
    },
    {
        image: '/sponsor.jpg',
        alt: 'Sponsor 4',
        title: 'Support',
        description: 'From handpicked sellers',
    },
];

const Page = () => {
    return (
        <div className="">
            {/* Banner */}
            <BannerLogin title="Account Login" image="/testBanner.jpg" />

            {/* Form Login and Register */}
            <div className="py-[90px] px-4 sm:px-[80px] lg:px-[175px] flex flex-col lg:flex-row w-full gap-[30px] sm:gap-[80px] bg-gray-100">
                <FormLogin />
                <FormRegister />
            </div>

            <div className="py-[90px] px-4 sm:px-[80px] lg:px-[175px] w-full bg-gray-100">
                <Sponsor sponsors={sponsors} /> {/* Pass the sponsors array */}
            </div>
        </div>
    );
};

export default Page;
