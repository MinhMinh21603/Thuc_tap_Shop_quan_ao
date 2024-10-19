import React from 'react'

const Bannerr = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-3 gap-8">
          {/* Phần tử lớn 620x688 chiếm 1/3 chiều rộng */}
        <div className="col-span -1 bg-gray-300 h-[688px] flex flex-col pt-6 px-6">
          <h2 className="text-lg font-bold mb-4">Spring Collection Style To</h2>
          <a href="#" className="text-pink-600">View Discounts →</a>
        </div>

          {/* Container cho 2 phần tử nhỏ và phần tử ngang dài */}
          <div className="col-span-2 grid grid-rows-2 gap-8">
            {/* 2 phần tử nhỏ nằm trên */}
            <div className="grid grid-cols-2 gap-8"   >
              {/* Phần tử nhỏ thứ nhất */}
              <div className="bg-gray-300 h-[337px] w-full">
                <h2 className="text-lg font-bold">Up to 70% Off & Free Shipping</h2>
                <a href="#" className="text-pink-600">View Discounts →</a>
              </div>
              {/* Phần tử nhỏ thứ hai */}
              <div className="bg-gray-300 h-[337px] w-full">
                <h2 className="text-lg font-bold">Free Shipping Over Order $120</h2>
                <a href="#" className="text-pink-600">View Discounts →</a>
              </div>
            </div>

            {/* Phần tử ngang dài chiếm hết 100% chiều rộng */}
            <div className="bg-gray-300 h-[322px]">
              <h2 className="text-lg font-bold">Leather Saddle Bag Style</h2>
              <a href="#" className="text-pink-600">View Discounts →</a>
            </div>
          </div>
      </div>
    </div>
    

  )
}

export default Bannerr
