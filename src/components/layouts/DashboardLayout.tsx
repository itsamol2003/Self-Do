import React from 'react';
import Sidebar from '../navigation/Sidebar';
import TopNavbar from '../navigation/TopNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div>
     
      <TopNavbar />

      {/* Sidebar + Content below */}
      <div className="d-flex flex-column flex-lg-row">
        <Sidebar /> {/* Sidebar full-width in mobile, left in desktop if needed */}

       <div className="flex-grow-1 p-3 main-content-area">

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
