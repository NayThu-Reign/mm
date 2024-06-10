import React, { useRef, useState } from 'react';
import { useAuth } from './providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const userCredRef = useRef();
    const passwordRef = useRef();
    const { setAuthUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const userCred = userCredRef.current.value;
        const password = passwordRef.current.value;

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
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username or Email</label>
                    <input type="text" ref={userCredRef} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" ref={passwordRef} required />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
