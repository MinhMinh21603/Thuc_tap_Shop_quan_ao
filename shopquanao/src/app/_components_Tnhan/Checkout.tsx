import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 bg-white p-8 rounded shadow-md">
        {/* Left Column */}
        <div className="w-full lg:w-2/3">
          {/* Logo and Breadcrumb */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-pink-600">SURUCHI</h1>
            <nav className="text-gray-500 text-sm">
              Cart &gt; Information &gt; Shipping &gt; Payment
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Contact Information</h2>
            <p className="text-sm">
              Already have an account?{" "}
              <a href="#" className="text-pink-600 hover:underline">Log in</a>
            </p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full p-3 border border-gray-300 rounded mb-2"
            />
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Email me with news and offers
            </label>
          </div>

          {/* Shipping Address */}
          <h2 className="text-lg font-bold mt-8 mb-6">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name (optional)" className="p-3 border border-gray-300 rounded" />
            <input type="text" placeholder="Last name" className="p-3 border border-gray-300 rounded" />
            <input type="text" placeholder="Company (optional)" className="p-3 border border-gray-300 rounded md:col-span-2" />
            <input type="text" placeholder="Address1" className="p-3 border border-gray-300 rounded md:col-span-2" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="p-3 border border-gray-300 rounded md:col-span-2" />
            <input type="text" placeholder="City" className="p-3 border border-gray-300 rounded md:col-span-2" />
            <div className="grid grid-cols-2 col-span-2 gap-4">
            <select className="p-3 border border-gray-300 rounded" name="country" title="Select a country" aria-label="Country selector">
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
            </select>

              <input type="text" placeholder="Postal code" className="p-3 border border-gray-300 rounded" />
            </div>
            <label className="flex items-center text-sm text-gray-600 md:col-span-2">
              <input type="checkbox" className="mr-2" />
              Save this information for next time
            </label>
          </div>

          {/* Buttons */}
          <div className="flex items-center mt-8 space-x-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded font-semibold hover:bg-pink-600">
              Continue To Shipping
            </button>
            <a href="#" className="text-pink-600 font-semibold hover:underline">Return to cart</a>
          </div>
           {/* Copyright */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Copyright © 2022 <span className="font-semibold text-pink-600">Suruchi</span>. All Rights Reserved. Design By Suruchi
          </p>
        </div>

        {/* Separator */}
        <div className="hidden lg:block border-l border-gray-300 mx-4 h-full"></div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3">
          {/* Order Summary */}
          <h2 className="text-lg font-bold mb-6">Order Summary</h2>
          
          {/* Placeholder for order items */}
          <div className="mb-4 space-y-4">
            {/* Product 1 */}
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://via.placeholder.com/100" alt="product" className="w-16 h-16 rounded" />
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <div className="flex-grow ml-4">
                <p className="font-semibold">Fresh-whole-fish</p>
                <p className="text-sm text-gray-500">Color: Blue</p>
              </div>
              <p className="font-semibold">£65.00</p>
            </div>
            <hr className="my-4" />

            {/* Product 2 */}
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://via.placeholder.com/100" alt="product" className="w-16 h-16 rounded" />
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <div className="flex-grow ml-4">
                <p className="font-semibold">Vegetable-healthy</p>
                <p className="text-sm text-gray-500">Color: Green</p>
              </div>
              <p className="font-semibold">£82.00</p>
            </div>
            <hr className="my-4" />

            {/* Product 3 */}
            <div className="flex items-center mb-4">
              <div className="relative">
                <img src="https://via.placeholder.com/100" alt="product" className="w-16 h-16 rounded" />
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <div className="flex-grow ml-4">
                <p className="font-semibold">Raw-onions-surface</p>
                <p className="text-sm text-gray-500">Color: White</p>
              </div>
              <p className="font-semibold">£78.00</p>
            </div>
          </div>
          <hr className="my-4" />
          {/* Discount Code */}
          <div className="flex mb-4 items-center space-x-2">
            <input
              type="text"
              placeholder="Gift card or discount code"
              className="p-3 border border-gray-300 rounded hover:border-pink-600 focus:border-pink-400"
            />
            <button className="bg-pink-500 text-white px-4 py-3 rounded-r font-semibold hover:bg-pink-600 rounded">
              Apply
            </button>
          </div>
          <hr className="my-4" />
          {/* Subtotal */}
          <div className="flex justify-between font-semibold text-lg mb-2">
            <p>Subtotal</p>
            <p>$860.00</p>
          </div>
          <div className="flex justify-between text-gray-500 mb-6">
            <p>Shipping</p>
            <p>Calculated at next step</p>
          </div>
          <hr className="my-4" />
          {/* Total */}
          <div className="flex justify-between font-bold text-2xl">
            <p>Total</p>
            <p>$860.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
