"use client";
import React from 'react';

const NavBar = () => {
  return (
    <section className='bg-white'>
        <div className=" container mx-auto bg-white flex justify-between items-center py-4">
      {/* Menu */}
      <nav className="container flex justify-between w-1/2">
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Home</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Shop</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">About US</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Blog</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Categories</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Pages</a>
        </div>
        <div className="relative group">
          <a href="#" className="text-grayColor hover:text-backgroundPink">Contact</a>
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