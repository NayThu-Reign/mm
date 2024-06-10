import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const login = async (userCred, password) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userCred, password }),
            });

            const data = await res.json();

            if (data.status === 200) {
                setAuthUser(data.currentUser);
                localStorage.setItem('token', data.currentUser.token);
                localStorage.setItem('user', JSON.stringify(data.currentUser));
                navigate('/dashboard');
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        setAuthUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
            setAuthUser(user);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
