import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 border-r pr-6">
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      <ul className="space-y-4">
        <li className="text-black font-medium">Dashboard</li>
        <li className="text-pink-500 font-medium">Addresses</li>
        <Link href="/profile/wishlist">
                    <li className="text-black font-medium cursor-pointer">
                        Wishlist
                    </li>
                </Link>
        <li className="text-black font-medium">Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
