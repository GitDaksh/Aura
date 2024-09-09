import React, { useState } from 'react';
import axios from 'axios'; 
import '/Users/dakshpushpad/Documents/GitHub/Aura/aura-frontend/src/styles.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);  
            alert('Login successful');
            window.location.href = '/';  
        } catch (error) {
            alert('Error during login');
            console.error(error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
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