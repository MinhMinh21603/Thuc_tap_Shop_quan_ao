"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import các icon

const StickyNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <div className='container mx-auto flex justify-between items-center bg-white py-6'>
          {/* Logo */}
          <div className="flex">
            <Image src="/img/logo/logo.png" alt="Logo" width={160} height={160} />
          </div>

          {/* Menu */}
          <nav className="flex justify-between w-1/2">
            <Link href="/" className="text-gray-600 hover:text-backgroundPink">Home</Link>
            <Link href="/product-home" className="text-gray-600 hover:text-backgroundPink">Shop</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-backgroundPink">About US</Link>
            <Link href="/blog" className="text-gray-600 hover:text-backgroundPink">Blog</Link>
            <Link href="#" className="text-gray-600 hover:text-backgroundPink">Categories</Link>
            <Link href="/contact" className="text-gray-600 hover:text-backgroundPink">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-8">
            <FaSearch className="hover:text-backgroundPink text-2xl text-gray-600" />
            <FaUser className="hover:text-backgroundPink text-xl text-gray-600" />
            <div className="relative">
              <FaHeart className="hover:text-backgroundPink text-2xl text-gray-600" />
              <span className="bg-backgroundPink text-white rounded-full text-xs px-1 absolute -top-2 -right-2">02</span>
            </div>
            <div className="relative">
              <FaShoppingCart className="hover:text-backgroundPink text-2xl text-gray-600" />
              <span className="bg-backgroundPink text-white rounded-full text-xs px-1 absolute -top-2 -right-2">02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;