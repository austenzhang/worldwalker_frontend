import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    // Redirect to login if the token is not available
    return <Navigate to="/login" />;
  }

  // Render the child components if the token exists
  return children;
};

export default ProtectedRoute;
