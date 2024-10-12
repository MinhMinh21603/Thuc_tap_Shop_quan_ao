"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LanguageDropdown from './LanguageDropdown';
import CurrencyDropdown from './CurrencyDropdown';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Trạng thái để kiểm tra cuộn

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Đóng menu khi nhấp ra ngoài
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Sử dụng useEffect để theo dõi cuộn trang và kích hoạt sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Overlay cho menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
          onClick={closeMenu}
        ></div>
      )}

      <header
        className={`${
          isSticky ? 'fixed top-0 left-0 z-50 w-full' : 'relative'
        } bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center transition-all duration-300`}
      >
        {/* Menu button and logo */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        
        {/* Logo */}
        <Image
          src="/img/logo/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-[150px] md:w-[200px] h-auto"
        />
        
        {/* Giỏ hàng và người dùng */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center cursor-pointer group">
            <i className="fa-solid fa-user text-black text-lg group-hover:text-backgroundPink"></i>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative group">
            <i className="fa-solid fa-heart text-black text-lg group-hover:text-backgroundPink"></i>
            <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-1 left-3">02</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative group">
            <i className="fa-solid fa-cart-shopping text-black text-lg group-hover:text-backgroundPink"></i>
            <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-1 left-3">02</span>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-[1001] transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between">
              <Image
                src="/img/logo/logo.png"
                alt="Logo"
                width={140}
                height={80}
                className="w-[150px] md:w-[150px] h-9"
              />
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation menu items */}
            <ul className="space-y-4 my-3 text-xl font-light">
              <li><a href="#" className="text-black hover:text-backgroundPink">Home</a></li>
              <li><a href="#" className="text-black hover:text-backgroundPink">Shop</a></li>
              <li><a href="#" className="text-black hover:text-backgroundPink">Blog</a></li>
              <li><a href="#" className="text-black hover:text-backgroundPink">Pages</a></li>
              <li><a href="#" className="text-black hover:text-backgroundPink">About</a></li>
              <li><a href="#" className="text-black hover:text-backgroundPink">Contact</a></li>
            </ul>

            {/* User login/register */}
            <div className="mt-6">
              <a href="#" className="text-backgroundPink font-bold">
                <i className="fa-regular fa-user"></i> Login / Register
              </a>
            </div>

            {/* Language and Currency dropdowns */}
            <div className="mt-6 flex justify-between">
              <div className="text-sm text-black">
                <LanguageDropdown textColor="text-black" />
              </div>
              <div className="text-sm">
                <CurrencyDropdown textColor="text-black"></CurrencyDropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;