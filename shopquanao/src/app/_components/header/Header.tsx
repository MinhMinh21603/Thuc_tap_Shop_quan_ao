"use client";
import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md shadow-inner border-b border-b-gray-300 border-solid">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/"><Image
            alt="This is Logo"
            src="/img/logo/logo.png"
            width={160}
            height={160}
          /></Link>
        </div>
        <SearchBar />

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* My Account */}
          <Link href="/profile">
            <div className="flex flex-col items-center cursor-pointer group">
              <FaUser className="text-gray-600 group-hover:text-backgroundPink text-2xl" /> 
              <span className="text-gray-600 group-hover:text-backgroundPink">My Account</span>
            </div>
          </Link>

          {/* Wish List */}
          <div className="flex flex-col items-center cursor-pointer relative group">
            <FaHeart className="text-gray-600 group-hover:text-backgroundPink text-2xl" />
            <span className="text-gray-600 group-hover:text-backgroundPink">Wish List</span>
            <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-2 right-2">
              02
            </span>
          </div>

          {/* My Cart */}
          <Link href="/shopping-cart">
            <div className="flex flex-col items-center cursor-pointer relative group">
              <FaShoppingCart className="text-gray-600 group-hover:text-backgroundPink text-2xl" />
              <span className="text-gray-600 group-hover:text-backgroundPink">My Cart</span>
              <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-2 right-2">
                02
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;