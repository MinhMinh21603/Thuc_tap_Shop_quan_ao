import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative inline-block flex items-center text-black border border-gray-300 rounded-md overflow-hidden w-searchBar">
      {/* Dropdown với mũi tên căn giữa */}
      <div className="relative flex items-center">
        <select className="appearance-none bg-transparent px-4 py-3 pr-8 text-gray-600 focus:outline-none">
            <option>All Categories</option>
            <option>Accessories</option>
            <option>Accessories & More</option>
            <option>Camera & Video</option>
            <option>Butters & Eggs</option>
        </select>
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-3 h-3 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="h-full border-l border-gray-300"></div>

      <input
        type="text"
        placeholder="Keyword here..."
        className="p-2 flex-grow bg-transparent focus:outline-none"
      />

      <button className="bg-backgroundPink hover:bg-hoverColor text-white p-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;