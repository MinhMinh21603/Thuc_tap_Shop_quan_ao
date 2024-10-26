import React from 'react';

const Address = () => {
  return (
    <div className="w-3/4 pl-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Addresses</h2>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Add a new address</button>
      </div>
      <div className="border p-4 rounded-md">
        <h3 className="font-bold mb-4">Default</h3>
        <p>Admin</p>
        <p>Dhaka</p>
        <p>Dhaka 12119</p>
        <p>Bangladesh</p>
        <a href="#" className="text-pink-500 underline mt-4 block">View Addresses (1)</a>
        <div className="flex space-x-4 mt-4">
          <button className="border border-black text-black px-4 py-2 rounded-md">Edit</button>
          <button className="border border-black text-black px-4 py-2 rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
