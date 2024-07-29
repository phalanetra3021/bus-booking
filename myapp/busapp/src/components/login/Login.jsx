import React, { useState } from 'react';
import './Login.css'; // Ensure you have the appropriate CSS for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        // Dummy authentication (replace with actual API call)
        if (email === 'test@example.com' && password === 'password') {
            // Redirect or perform other actions on successful login
            console.log('Login successful');
            // For example, navigate to the dashboard
            // window.location.href = '/dashboard';
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <div className="links">
                    <a href="/forgot-password">Forgot Password?</a>
                    <a href="/register">Don't have an account? Register</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
