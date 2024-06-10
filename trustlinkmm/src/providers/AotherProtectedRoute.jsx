import React from 'react';
import { useAuth } from './providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { authUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!authUser) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
