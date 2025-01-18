import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  return element;
};

export default ProtectedRoute;
