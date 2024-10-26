import React from 'react';
import Sidebar from '../_component_Vnhan/my-profile/Sidebar';
import Address from '../_component_Vnhan/my-profile/Address';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white rounded-md shadow-md p-8 max-w-5xl w-full flex">
        <Sidebar />
        <Address />
      </div>
    </div>
  );
};

export default Profile;
