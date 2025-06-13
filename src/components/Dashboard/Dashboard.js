import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { mockData } from '../../data/mockData';
import 'tailwindcss/tailwind.css';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar positioned on the left */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content with overlay for mobile when sidebar is open */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-30">
          <div className="flex space-x-4">
            <h1 className="text-xl font-bold text-gray-800">Employee Leave Management</h1>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Dashboard</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Request Leave</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Calendar</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">History</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Olusheyi Azeez</span>
            <img
              src="https://via.placeholder.com/40" // Replace with actual user image URL
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>

        {/* Main Content Area with padding for fixed nav */}
        <div className="pt-16 p-6"> {/* Padding-top to account for fixed nav */}
          <button
            className="md:hidden p-4 focus:outline-none z-30"
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={toggleSidebar}
            />
          )}
          <style>
            {`
              .custom-card {
                border: none;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                transition: transform 0.2s;
                padding: 1rem;
                text-align: center;
                background: #ffffff;
              }
              .custom-card:hover {
                transform: translateY(-5px);
              }
              .custom-card-title {
                font-size: 1rem;
                color: #333;
                font-weight: 600;
              }
              .custom-card-text {
                font-size: 0.9rem;
                color: #666;
              }
              .progress-bar {
                height: 5px;
                background: #e0e0e0;
                border-radius: 5px;
                overflow: hidden;
                margin: 0.5rem 0;
              }
              .progress {
                height: 100%;
                background: #3498db;
                border-radius: 5px;
              }
              @media (max-width: 768px) {
                .custom-card {
                  padding: 0.75rem;
                }
              }
            `}
          </style>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="custom-card">
              <h2 className="custom-card-title">Total Leave Taken</h2>
              <p className="text-2xl font-bold text-gray-800">16 days</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '29%' }}></div> {/* Adjust based on remaining days */}
              </div>
              <p className="custom-card-text">29 days remaining this year</p>
            </div>
            <div className="custom-card">
              <h2 className="custom-card-title">Approval Rate</h2>
              <p className="text-2xl font-bold text-gray-800">92%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '29%' }}></div> {/* Adjust based on remaining days */}
              </div>
              <p className="custom-card-text">29 days remaining this year</p>
            </div>
            <div className="custom-card">
              <h2 className="custom-card-title">Pending Request</h2>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '29%' }}></div> {/* Adjust based on remaining days */}
              </div>
              <p className="custom-card-text">29 days remaining this year</p>
            </div>
            <div className="custom-card">
              <h2 className="custom-card-title">Team Member on Leave</h2>
              <p className="text-2xl font-bold text-gray-800">2</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '29%' }}></div> {/* Adjust based on remaining days */}
              </div>
              <p className="custom-card-text">29 days remaining this year</p>
            </div>
          </div>
          {/* Add more sections (Leave Overview, Upcoming Leave, Notifications) as needed */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;