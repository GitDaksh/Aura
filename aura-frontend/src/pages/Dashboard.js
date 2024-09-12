import React, { useState } from 'react';
import categoriesData from '../data/categories.json';
import './Dashboard.css';

const Dashboard = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategories(prev => prev.includes(category)
            ? prev.filter(cat => cat !== category)
            : [...prev, category]
        );
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategories(prev => prev.includes(subcategory)
            ? prev.filter(sub => sub !== subcategory)
            : [...prev, subcategory]
        );
    };

    const renderCategories = () => (
        Object.keys(categoriesData).map(category => (
            <div key={category} className="category-container">
                <button
                    className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
                {selectedCategories.includes(category) && (
                    <div className="subcategories-container">
                        {Object.keys(categoriesData[category]).map(subcategory => (
                            <div key={subcategory} className="subcategory-container">
                                <button
                                    className={`subcategory-button ${selectedSubcategories.includes(subcategory) ? 'selected' : ''}`}
                                    onClick={() => handleSubcategoryClick(subcategory)}
                                >
                                    {subcategory}
                                </button>
                                {selectedSubcategories.includes(subcategory) && (
                                    <ul className="items-list">
                                        {categoriesData[category][subcategory].map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))
    );

    return (
        <div className="dashboard container">
            <h2>Select Your Interests</h2>
            {renderCategories()}
        </div>
    );
};

export default Dashboard;
