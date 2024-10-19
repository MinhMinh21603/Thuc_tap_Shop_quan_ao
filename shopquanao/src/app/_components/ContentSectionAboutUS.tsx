import Image from 'next/image';
import React from 'react';

const ContentSectionAboutUS = () => {
    return (
        <div className="py-20 px-4 sm:px-16 lg:px-44 flex flex-col lg:flex-row gap-10 bg-white">

        {/* Left Section with images */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* First Image Block */}
          <div className="w-full sm:w-64 lg:w-72 h-[450px] bg-gray-300 rounded-lg mt-10">
            <Image
              src="/rollupBanner.jpg"
              alt="Rollup Banner"
              width={100}
              height={100}
              objectFit="cover"
              quality={100}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="relative w-full sm:w-64 lg:w-72 h-[450px] bg-gray-300 rounded-lg flex items-center justify-center">
          <Image
              src="/rollupBanner.jpg"
              alt="Rollup Banner"
              width={100}
              height={100}
              objectFit="cover"
              quality={100}
              className="rounded-lg w-full h-full object-cover"
            />
            {/* Play Button */}
            <div className="absolute">
              <div className="ripple-btn">
                <div className="ripple-circle text-white">
                  <svg
                    id="play"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40.302"
                    height="40.302"
                    viewBox="0 0 46.302 46.302"
                  >
                    <g
                      id="Group_193"
                      data-name="Group 193"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_116"
                        data-name="Path 116"
                        d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z"
                        fill="currentColor"
                      ></path>
                      <g
                        id="Group_188"
                        data-name="Group 188"
                        transform="translate(15.588 11.19)"
                      >
                        <g id="Group_187" data-name="Group 187">
                          <path
                            id="Path_117"
                            data-name="Path 117"
                            d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z"
                            transform="translate(-172.366 -123.734)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="Group_190"
                        data-name="Group 190"
                        transform="translate(28.593 5.401)"
                      >
                        <g id="Group_189" data-name="Group 189">
                          <path
                            id="Path_118"
                            data-name="Path 118"
                            d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z"
                            transform="translate(-316.174 -59.724)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="Group_192"
                        data-name="Group 192"
                        transform="translate(22.228 4.243)"
                      >
                        <g id="Group_191" data-name="Group 191">
                          <path
                            id="Path_119"
                            data-name="Path 119"
                            d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z"
                            transform="translate(-245.801 -46.917)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex-1">
          <h4 className="text-[#ee2761] text-lg font-semibold">Why Choose us</h4>
          <h2 className="text-4xl font-bold text-black leading-tight">
            We do not buy from the open market & traders.
          </h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo,
            est repellendus are quia voluptate neque reiciendis ea placeat
            labore maiores cum, hic ducimus ad a dolorem soluta consectetur
            adipisci.
          </p>
          <p className="text-gray-500 mt-4">
            Itaquecusantium eveniet a laboriosam dolorem? Magni suscipit est
            corrupti explicabo non perspiciatis, excepturi ut asperiores
            assumenda rerum? Provident ab corrupti sequi.
          </p>

          <div className="mt-8">
            <p className="font-bold text-black">Bruce Sutton</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Spa Manager</p>
              <div className="w-20 h-[45px]">
                <Image
                  src={"/signature.png"}
                  alt="signature"
                  width={100}
                  height={100}
                  quality={100}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContentSectionAboutUS;