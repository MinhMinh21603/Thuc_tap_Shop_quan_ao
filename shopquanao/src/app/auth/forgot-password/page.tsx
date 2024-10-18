import BannerLogin from '@/app/_components/BannerLogin';
import FormSection from '@/app/_components/FormSection';
import Sponsor from '@/app/_components/Sponsor';
import React from 'react';
interface SponsorItem {
    image: string;
    alt: string;
    title: string;
    description: string;
}

const sponsors: SponsorItem[] = [
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
interface InputFieldItem {
    type: string;
    name: string;
    placeholder: string;
}
const inputsSection: InputFieldItem[] = [
    { type: 'text', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
    { type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password' },
];

const page = () => {
    return (
        <div>
        {/* Banner */}
        <BannerLogin title="Account Login" image="/testBanner.jpg" />

        {/* Form Login and Register */}
        <div className="py-[90px] px-4 sm:px-[80px] lg:px-[175px] flex flex-col lg:flex-row w-full gap-[30px] sm:gap-[80px] bg-gray-100 items-start justify-center">
        <FormSection className="p-8 bg-white shadow-lg rounded-lg flex flex-0" inputsSection={inputsSection} title="Forget your password ? don't worry you just need to fill this form." grow="flex-0" titleMain="Forgot Password" titleButton="Submit"/>
        </div>

        {/* Sponsor Section */}
        <div className="px-4 sm:px-[80px] lg:px-[175px] w-full bg-gray-100">
            <Sponsor sponsors={sponsors} />
        </div>
    </div>
    );
};

export default page;