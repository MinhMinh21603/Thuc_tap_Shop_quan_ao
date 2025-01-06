import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 border-r pr-6">
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      <ul className="space-y-4">
      <Link href="/profile/dashboard">
                    <li className="text-black font-medium cursor-pointer">
                        Dashboard
                    </li>
      </Link>
        <li className="text-pink-500 font-medium">Addresses</li>
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
    </div>
  );
};

export default Sidebar;
