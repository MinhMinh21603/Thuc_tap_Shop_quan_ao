import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto py-10 px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5 mx-auto">
        {/* Left side - Image and Thumbnails */}
        <div>
          <div className="relative bg-gray-300 w-[580px] h-[630px] flex items-center justify-center">
            <span className="text-gray-500">580x630</span>
            <button className="absolute top-2 left-2 bg-backgroundPink text-white w-10 h-10 hover:bg-hoverColor rounded-full flex items-center justify-center"
              aria-label='search'
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 w-[90px] h-[98px] cursor-pointer flex items-center justify-center"
              >
                <span className="text-gray-500">90x98</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product details */}
        <div>
          <h1 className="text-2xl font-bold">Oversize Cotton Dress</h1>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xl font-semibold">$110</span> -
            <span className="text-gray-500 line-through">$178</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ad labore aut ipsa ut, ab minus illo beatae unde sapiente distinctio nemo porro quidem quasi doloremque! Odit nesciunt eos quidem.
          </p>

          {/* Color options */}
          <div className="mt-4">
            <span className="font-semibold">Color :</span>
            <div className="flex items-center gap-4 mt-2">
              {['pink', 'gray', 'black'].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border border-gray-300 ${color === 'pink' ? 'bg-pink-300' : 'bg-gray-400'}`}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>

          {/* Weight options */}
          <div className="mt-4">
            <span className="font-semibold">Weight :</span>
            <div className="flex items-center gap-4 mt-2">
              {['5 kg', '3 kg', '2 kg'].map((weight, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm border-gray-300 rounded-md"
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity selector and buttons */}
          <div className="flex items-center mt-4 gap-4">
            <div className="flex items-center">
              <button className="px-2 py-1 border border-gray-300 bg-gray-200 rounded-tl-2xl rounded-bl-2xl">-</button>
              <input
                type="text"
                value="1"
                className="w-10 py-1 text-center border border-gray-300"
                readOnly

              />
              <button className="px-2 py-1 border border-gray-300 bg-gray-200 rounded-tr-2xl rounded-br-2xl">+</button>
            </div>
            <button className="px-6 py-2 bg-backgroundPink hover:bg-hoverColor text-white rounded">
              Add To Cart
            </button>
          </div>

          <div className="mt-6">
            <button className="px-6 py-4 bg-backgroundPink hover:bg-hoverColor text-white rounded w-full">
              Buy it now
            </button>
          </div>

          {/* Product information */}
          <div className="mt-4">
            <p className="mt-4 text-grayColor"><strong>Barcode:</strong> 565461</p>
            <p className="mt-4 text-grayColor"><strong>SKU:</strong> 4420</p>
            <p className="mt-4 text-grayColor"><strong>Vendor:</strong> Belo</p>
            <p className="mt-4 text-grayColor"><strong>Type:</strong> Dress</p>
          </div>

          {/* Social Share */}
          <div className="mt-4">
            <div className="flex items-center gap-4 mt-2">
              <span className="font-semibold">Social Share:</span>
              {['facebook', 'twitter', 'instagram', 'youtube'].map((icon) => (
                <a key={icon} href="#" className="text-gray-600">
                  <button className="bg-backgroundPink text-white w-8 h-8 hover:bg-hoverColor rounded-full flex items-center justify-center">
                    {icon === 'facebook' ? <i className="fab fa-facebook-f"></i> :
                      icon === 'twitter' ? <i className="fab fa-twitter"></i> :
                        icon === 'instagram' ? <i className="fab fa-instagram"></i> :
                          <i className="fab fa-youtube"></i>}
                  </button>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <span className="font-semibold">Guaranteed Safe Checkout</span>
            <div
              className="bg-gray-300 w-[355px] h-[28px] cursor-pointer flex mt-5 items-center justify-center"
            >
              <span className="text-gray-500">355x28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;