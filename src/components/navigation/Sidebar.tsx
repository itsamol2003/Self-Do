import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, CalendarRange, CreditCard, Star, HelpCircle, Settings, User, Briefcase, X } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext"; // Use Sidebar context

const Sidebar: React.FC = () => {
  const { isSidebarVisible, closeSidebar } = useSidebar();  // Get state and close function

  return (
    <div className={`sidebar bg-white shadow-sm h-100 p-3 border-end ${isSidebarVisible ? 'show' : ''}`}>
      {/* Close button for mobile */}
      <div className="d-flex justify-content-end d-lg-none mb-3">
        <button className="btn btn-sm btn-outline-secondary" onClick={closeSidebar}>
          <X size={18} />
        </button>
      </div>

      <div className="mb-3">
        <small className="text-uppercase text-muted ps-2 mb-2 d-block">Main</small>
        <Nav className="flex-column gap-2" as="ul">
          <NavItem to="/dashboard" label="Dashboard" icon={<LayoutDashboard size={18} />} />
         <NavItem to="/my-booking" label="My Bookings" icon={<CalendarRange size={18} />} />

          <NavItem to="/payment-methods" label="Payment Methods" icon={<CreditCard size={18} />} />
          <NavItem to="/reviews" label="Reviews" icon={<Star size={18} />} />
          <NavItem to="/support" label="Support" icon={<HelpCircle size={18} />} />
          <NavItem to="/experience" label="My Experience" icon={<Briefcase size={18} />} />
       
         <NavItem to="/view-all-car" label="View All Cars" icon={<Briefcase size={18} />} />



        </Nav>
      </div>

      <hr />

      <div>
        <small className="text-uppercase text-muted ps-2 mb-2 d-block">Account</small>
        <Nav className="flex-column gap-2" as="ul">
          <NavItem to="/profile" label="My Profile" icon={<User size={18} />} />
          <NavItem to="/preferences" label="Preferences" icon={<Settings size={18} />} />
        </Nav>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon }) => {
  const { closeSidebar } = useSidebar();  // Close sidebar on click

  return (
    <Nav.Item as="li">
      <NavLink
        to={to}
        onClick={closeSidebar}  // Close sidebar on click
        className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-2 px-3 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-dark'}`
        }
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </Nav.Item>
  );
};

export default Sidebar;
