import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const response = await axios.get('http://localhost:3000/users/me', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            const token = localStorage.getItem('token');
            try {
                await axios.delete(`http://localhost:3000/users/${user._id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                localStorage.removeItem('token');
                navigate('/');
            } catch (error) {
                console.error('Error deleting account:', error);
                alert('Failed to delete account. Please try again.');
            }
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-dashboard">
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            <div className="dashboard-buttons">
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
            </div>
        </div>
    );
};

export default UserDashboard;