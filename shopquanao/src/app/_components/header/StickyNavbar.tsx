"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const StickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
    <div className="bg-white shadow-md">
        <div className='container mx-auto flex justify-between items-center px-10 bg-white py-6'>
            {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/img/logo/logo.png" alt="Logo" width={160} height={160} />
        </div>

        {/* Menu */}
        <nav className="flex justify-between w-1/2">
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            About US
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Categories
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Pages
          </a>
          <a href="#" className="text-gray-600 hover:text-backgroundPink">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-8">
          <i className="fa-solid fa-search hover:text-backgroundPink text-xl text-gray-600"></i>
          <i className="fa-solid fa-user hover:text-backgroundPink text-xl text-gray-600"></i>
          <div className="relative">
            <i className="fa-solid fa-heart hover:text-backgroundPink text-xl text-gray-600"></i>
            <span className="bg-backgroundPink text-white rounded-full text-xs px-1 absolute -top-2 -right-2">
              02
            </span>
          </div>
          <div className="relative">
            <i className="fa-solid fa-cart-shopping hover:text-backgroundPink text-xl text-gray-600"></i>
            <span className="bg-backgroundPink text-white rounded-full text-xs px-1 absolute -top-2 -right-2">
              02
            </span>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default StickyNavbar;