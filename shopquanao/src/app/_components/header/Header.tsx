"use client";
import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md shadow-inner border-b border-b-gray-300 border-solid">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            alt="This is Logo"
            src="/img/logo/logo.png"
            width={160}
            height={160}
          />
        </div>
        <SearchBar></SearchBar>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* My Account */}
          <Link href="/profile">
            <div className="flex flex-col items-center cursor-pointer group">
              <i className="fa-solid fa-user text-black text-lg group-hover:text-backgroundPink"></i>
              <span className="text-gray-600 group-hover:text-backgroundPink">My Account</span>
            </div>
          </Link>

          {/* Wish List */}
          <div className="flex flex-col items-center cursor-pointer relative group">
            <i className="fa-solid fa-heart text-black text-lg group-hover:text-backgroundPink"></i>
            <span className="text-gray-600 group-hover:text-backgroundPink">Wish List</span>
            <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-1 left-7">
              02
            </span>
          </div>

          {/* My Cart */}
          <Link href="/shopping-cart">
          <div className="flex flex-col items-center cursor-pointer relative group">
            <i className="fa-solid fa-cart-shopping text-black text-lg group-hover:text-backgroundPink"></i>
            <span className="text-gray-600 group-hover:text-backgroundPink">My cart</span>
            <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute -top-1 left-7">
              02
            </span>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header
