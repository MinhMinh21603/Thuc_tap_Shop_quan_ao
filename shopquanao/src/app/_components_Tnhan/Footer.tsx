import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    
    <footer className="bg-neutral-800 text-white py-8">
        
    <div className="container mx-auto grid grid-cols-8 gap-4">
      
      {/* About Us */}
      <div className="col-span-2">
        <h2 className="font-bold text-lg mb-9 relative">About Us
          <div className="bg-slate-400 w-[50px] h-1 absolute"></div>
        </h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna.
        </p>
        <h2 className="font-bold text-lg mb-9 mt-5 relative">Follow Us</h2>
      </div>
  
      {/* My Account */}
      <div className="col-span-1">
        <h2 className="font-bold text-lg mb-9 relative">My Accout
          <div className="bg-slate-400 mb-2 w-[50px] h-1 absolute"></div>
        </h2>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#">Sign In</a></li>
          <li><a href="#">View Cart</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><a href="#">Track My Order</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
  
      {/* Categories */}
      <div className="col-span-1">
        <h2 className="font-bold text-lg mb-9 relative">Categories
          <div className="bg-slate-400 mb-2 w-[50px] h-1 absolute"></div>
        </h2>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#">Men's Fashion</a></li>
          <li><a href="#">Women's Fashion</a></li>
          <li><a href="#">Kid's Fashion</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </div>
  
      {/* Instagram */}
      <div className="col-span-2">
        <h2 className="font-bold text-lg mb-9 text-start relative">Instagram
          <div className="bg-slate-400 mb-2 w-[50px] h-1 absolute"></div>
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-200 ">Image 1</div>
          <div className="bg-blue-200 ">Image 2</div>
          <div className="bg-blue-200 ">Image 3</div>
          <div className="bg-blue-200 ">Image 4</div>
          <div className="bg-blue-200 ">Image 5</div>
          <div className="bg-blue-200 ">Image 6</div>
        </div>
      </div>
  
      {/* Newsletter */}
      <div className="col-span-2">
        <h2 className="font-bold text-lg mb-9 relative">Newsletter
          <div className="bg-slate-400 mb-2 w-[50px] h-1 absolute"></div>
        </h2>
        <p className="text-gray-400 mb-9">Get updates on new products and upcoming sales.</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400"
          />
          <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-r">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  
    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
      <div className="container mx-auto grid grid-cols-11">
        <div className="col-span-11 flex justify-between items-center">
          <p>© 2024 Suruchi. All Rights Reserved. Designed by Suruchi.</p>
          <div className="bg-slate-200 w-[410px] h-auto">đư</div>
        </div>
      </div>
    </div>
  </footer>
  
  
  
  )
}

export default Footer
