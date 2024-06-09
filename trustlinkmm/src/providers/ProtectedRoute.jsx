// src/components/ProtectedRoute.jsx

import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthProvider';

import { useAuth } from './AuthProvider';

export default function  ProtectedRoute ({ children}) {
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
};



