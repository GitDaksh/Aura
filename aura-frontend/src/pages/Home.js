import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Aura</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};

export default Home;
