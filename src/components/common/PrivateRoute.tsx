import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { user } = useAuth();

  // Debug log to confirm it's triggered
  console.log("🔐 PrivateRoute: user =", user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
