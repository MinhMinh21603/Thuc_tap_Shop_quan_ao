import BannerLogin from "@/app/_components/BannerLogin";
import FormLogin from "@/app/_components/FormLogin";
import FormSection from "@/app/_components/FormSection";
import Sponsor from "@/app/_components/Sponsor";
import React from "react";

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
    { type: 'text', name: 'username', placeholder: 'Username' },
    { type: 'text', name: 'email', placeholder: 'Email Address' },
    { type: 'password', name: 'password', placeholder: 'Password' },
    { type: 'password', name: 'confirmPassword', placeholder: 'Confirm Password' },
];

const Page: React.FC = () => {
    return (
        <div>
            {/* Banner */}
            <BannerLogin title="Account Login" image="/testBanner.jpg" />

            {/* Form Login and Register */}
            <div className="py-20 px-4 sm:px-20 lg:px-44 flex flex-col lg:flex-row w-full gap-8 sm:gap-20 bg-gray-100 items-center justify-center">
                <FormLogin></FormLogin>
                <FormSection className="p-8 bg-white shadow-lg rounded-lg flex flex-1" inputsSection={inputsSection} title="Register here if you are a new customer." grow="flex-1" titleMain="Create an Account" titleButton="Submit & Register"/>
            </div>

            {/* Sponsor Section */}
            <div className="px-4 sm:px-20 lg:px-44 w-full bg-gray-100">
                <Sponsor sponsors={sponsors} />
            </div>
        </div>
    );
};

export default Page;
