import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({
        isAuthenticated: true,
        token,
        user: JSON.parse(localStorage.getItem('user')),
      });
    }
  }, []);



  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
