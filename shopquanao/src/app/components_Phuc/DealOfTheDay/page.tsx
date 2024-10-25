// pages/DealsOfTheDay.tsx
import React from 'react';

const DealsOfTheDay = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative bg-blue-500 p-5 text-white text-center mb-8 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/800x200?text=Deal+of+the+Day"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
        />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Deal of the Day</h1>
          <p className="text-lg">Get your exclusive deals today!</p>
          <div className="mt-4">
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
              Show Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
