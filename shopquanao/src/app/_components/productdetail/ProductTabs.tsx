"use client"; 
import { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: 'Product Reviews' },
    { id: 'additional', label: 'Additional Info' },
    { id: 'custom', label: 'Custom Content' },
  ];

  return (
    <div className="bg-FCFCFC py-16 px-5 mt-5">
      <div className='container mx-auto'>
        {/* Tabs */}
        <div className="flex justify-start border-b border-gray-200 w-4/5 mx-auto space-x-12">
            {tabs.map((tab) => (
            <button
                key={tab.id}
                className={`text-lg font-medium text-gray-600 ${
                activeTab === tab.id ? 'border-b-2 border-backgroundPink text-backgroundPink' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
            >
                {tab.label}
            </button>
            ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 w-4/5 mx-auto bg-white px-5 py-4">
            {activeTab === 'description' && (
            <div>
                <h2 className="text-lg font-semibold">Nam provident sequi</h2>
                <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam provident sequi, nemo sapiente culpa nostrum rem...
                </p>
                <h3 className="mt-6 font-semibold text-gray-800">More Details</h3>
                <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Lorem ipsum dolor sit amet consectetur.
                </li>
                <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Magnam enim modi, illo harum suscipit.
                </li>
                <li className="flex items-center">
                    <span className="mr-2">→</span>
                    Numquam eaque mollitia fugiat laborum.
                </li>
                </ul>
            </div>
            )}

            {activeTab === 'reviews' && (
            <div>
                <h2 className="text-lg font-semibold">Customer Reviews</h2>
                <div className='flex justify-between items-center'>
                <p className="mt-2 text-sm text-backgroundPink space-x-1">
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i> <span>Based on 2 reviews</span>
                </p>
                    <button className="mt-2 px-5 py-3 bg-backgroundPink hover:bg-hoverColor text-sm text-white rounded-md">White A Review</button>
                </div>
                <div className="mt-6 space-y-4">
                {/* Review 1 */}
                <div className="p-4 border rounded-md shadow">
                    <h3 className="font-semibold">Richard Smith</h3>
                    <p className="text-gray-500 text-sm">February 18, 2022</p>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
                {/* Review 2 */}
                <div className="p-4 border rounded-md shadow">
                    <h3 className="font-semibold">Laura Johnson</h3>
                    <p className="text-gray-500 text-sm">February 18, 2022</p>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
                <div className="p-4 border rounded-md shadow">
                    <h3 className="font-semibold">Laura Johnson</h3>
                    <p className="text-gray-500 text-sm">February 18, 2022</p>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
                {/* Review form */}
                <div className="mt-6">
                    <h4 className="font-semibold text-2xl">Add a review</h4>
                    <textarea
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:border-backgroundPink focus:outline-none"
                    rows={6}
                    placeholder="Your comments..."
                    />
                    <div className="flex space-x-8 mt-5">
                        <input 
                            type="text" 
                            className="w-1/2 px-2 py-4 border border-gray-300 rounded-md focus:border-backgroundPink focus:outline-none"
                            placeholder='Your Name...'
                        />
                        <input 
                            type="text" 
                            className="w-1/2 px-2 py-4 border border-gray-300 rounded-md focus:border-backgroundPink focus:outline-none"
                            placeholder='Your Name...'
                        />
                    </div>
                    <button className="mt-2 px-5 py-3 bg-backgroundPink hover:bg-hoverColor text-sm text-white rounded-md">SUBMIT</button>
                </div>
                </div>
            </div>
            )}

            {activeTab === 'additional' && (
            <div>
                <h2 className="text-lg font-semibold">Additional Information</h2>
                <p className="mt-4 text-gray-600">Here is some additional information about the product.</p>
            </div>
            )}

            {activeTab === 'custom' && (
            <div>
                <h2 className="text-lg font-semibold">Custom Content</h2>
                <p className="mt-4 text-gray-600">You can add any custom content here.</p>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;