import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';


export default function ProtectedRoute({children}) {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth) {
        // Redirect to login page if not authenticated
        // return <Navigate to="/login" />;


        navigate('/login', { replace: true });
        return null; //
    }

    // Render the children (protected component) if authenticated
    return children;
}

