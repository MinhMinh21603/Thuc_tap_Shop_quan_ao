"use client";
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <section className='bg-white'>
      <div className=" container mx-auto bg-white flex justify-between items-center py-4">
        {/* Menu */}
        <nav className="container flex justify-between w-1/2">
          <div className="relative group">
            <Link href="/" className="text-grayColor hover:text-backgroundPink">Home</Link>
          </div>
          <div className="relative group">
            <Link href="/product-home" className="text-grayColor hover:text-backgroundPink">Shop</Link>
          </div>
          <div className="relative group">
            <Link href={'/about-us'} className="text-grayColor hover:text-backgroundPink">About US</Link>
          </div>
          <div className="relative group">
            <Link href={'/blog'} className="text-grayColor hover:text-backgroundPink">Blog</Link>
          </div>
          <div className="relative group">
            <Link href="/product-home" className="text-grayColor hover:text-backgroundPink">Categories</Link>
          </div>
          <div className="relative group">
            <Link href="/contact" className="text-grayColor hover:text-backgroundPink">Contact</Link>
          </div>
        </nav>

        {/* Promotion */}
        <div className="flex items-center space-x-2">
          <i className="fa-regular fa-lightbulb text-2xl text-backgroundPink"></i>
          <span className="text-gray-600 text-lg">Special up to 60% Off all item</span>
        </div>
      </div>
    </section>
  );
};

export default NavBar;