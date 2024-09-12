import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if the user is logged in by looking for the token in localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true); // Set state to logged in if token is found
        }
    }, []);

    // Logout function to clear the token from localStorage and update the state
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/'); // Navigate back to home after logging out
    };

    // Navigate to the dashboard when the user clicks "Go to Dashboard"
    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="home-page">
            <h1>Welcome to Aura</h1>
            {isLoggedIn ? (
                <>
                    <button onClick={navigateToDashboard}>Go to Dashboard</button>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Home;
