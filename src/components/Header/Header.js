import React from 'react';

const Header = ({ user }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Employee Leave Management</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Olusheyi Azeez</span>
        <img
          src="https://via.placeholder.com/40" // Replace with actual user image
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Header;