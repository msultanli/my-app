import React from 'react';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 h-screen`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">Request Leave</a>
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">Calendar</a>
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">History</a>
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">Employee Leave Management</a>
          <a href="#" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">Profile</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;