"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [address, setAddress] = useState({
    name: "Admin",
    city: "Dhaka",
    postalCode: "12119",
    country: "Bangladesh",
  });

  const orders = [
    { id: '#2014', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Unfulfilled', total: '$40.00 USD' },
    { id: '#2024', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', total: '$44.00 USD' },
    { id: '#2164', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Unfulfilled', total: '$36.00 USD' },
    { id: '#2345', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Unfulfilled', total: '$87.00 USD' },
    { id: '#1244', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', total: '$66.00 USD' },
    { id: '#3455', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', total: '$55.00 USD' },
    { id: '#4566', date: 'February 06, 2022', paymentStatus: 'Paid', fulfillmentStatus: 'Unfulfilled', total: '$87.00 USD' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Address:", address);
    alert("Address updated successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-md p-8 max-w-5xl w-full mx-auto flex">
        <aside className="w-1/4 border-r pr-6">
          <h3 className="text-xl font-bold mb-6">My Profile</h3>
          <ul className="space-y-4">
            <li className="text-pink-500 font-medium cursor-pointer">Dashboard</li>
            <li className="text-pink-500 font-medium cursor-pointer">Addresses</li>
            <Link href="/profile/wishlist">
                    <li className="text-black font-medium cursor-pointer">
                        Wishlist
                    </li>
            </Link>
            <Link href="/profile/logout">
                    <li className="text-black font-medium cursor-pointer">
                        Log Out
                    </li>
            </Link>
          </ul>
        </aside>
        <div className="w-3/4 p-4">
          <section>
            <h3 className="text-xl font-bold mb-4 text-center">Orders History</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="p-2 text-left font-medium text-gray-700">Order</th>
                    <th className="p-2 text-left font-medium text-gray-700">Date</th>
                    <th className="p-2 text-left font-medium text-gray-700">Payment Status</th>
                    <th className="p-2 text-left font-medium text-gray-700">Fulfillment Status</th>
                    <th className="p-2 text-left font-medium text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 text-gray-700">{order.id}</td>
                      <td className="p-2 text-gray-700">{order.date}</td>
                      <td className="p-2 text-gray-700">{order.paymentStatus}</td>
                      <td className="p-2 text-gray-700">{order.fulfillmentStatus}</td>
                      <td className="p-2 text-gray-700">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h1 className="text-2xl font-bold text-center mb-6">Edit Address</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="postalCode">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={address.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-md"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
