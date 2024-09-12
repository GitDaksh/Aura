import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Reset message before trying login
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token in localStorage
            setMessage('Login successful! Redirecting...');
            setTimeout(() => navigate('/dashboard'), 1500); // Redirect after delay
        } catch (error) {
            console.error('Login error:', error.response?.data?.message || error.message);
            setMessage(error.response?.data?.message || 'Error during login. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
