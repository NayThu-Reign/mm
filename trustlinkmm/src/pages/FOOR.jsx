import React, { useRef, useState } from 'react';

const ForgotPassword = () => {
    const userCredRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const userCred = userCredRef.current.value;

            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userCred }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            setMessage(data.message);
            setError('');
        } catch (error) {
            console.error('Error sending email:', error);
            setError('Failed to send email');
            setMessage('');
        }
    };

    const handleResendEmail = async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/resend-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          if (!response.ok) {
            throw new Error(`Failed to resend email: ${response.statusText}`);
          }
    
          const data = await response.json();
          setMessage(data.message);
          setError('');
        } catch (error) {
          setError('Failed to resend email. Please try again.');
          console.error('Error resending email:', error);
        } finally {
          setLoading(false);
        }
      };
    

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username or Email:
                    <input
                        type="text"
                        ref={userCredRef}
                    />
                </label>
                <button type="submit">Send Email</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}

            <Button
        variant="contained"
        color="primary"
        onClick={handleResendEmail}
        disabled={loading || !email}
      >
        {loading ? <CircularProgress size={24} /> : 'Resend Email'}
      </Button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ForgotPassword;
