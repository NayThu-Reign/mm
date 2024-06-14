// ResetPassword.jsx

import React, { useRef, useState } from 'react';

const ResetPassword = () => {
    const userCredRef = useRef(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const userCred = userCredRef.current.value;

            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userCred }),
            });

            if (!response.ok) {
                throw new Error('Failed to send reset password link');
            }

            const data = await response.json();
            setMessage(data.message);
            setError('');
        } catch (error) {
            console.error('Error sending reset password link:', error);
            setError('Failed to send reset password link');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username or Email:
                    <input
                        type="text"
                        ref={userCredRef}
                    />
                </label>
                <button type="submit">Send Reset Password Link</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ResetPassword;

