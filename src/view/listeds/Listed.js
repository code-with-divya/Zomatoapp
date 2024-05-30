import React from 'react';
import './Listed.css';
import ReactDOM from 'react-dom/client';

function Listed() {
    return (
        <div className="search-container">
            <h2 className='simple'>Already have your restaurant listed?</h2>
            <h3 className='simples'>Search here and claim the ownership of your restaurant</h3>
            <div className="search-bar">
                <span className="location">Delhi NCR</span>
                <input type="text" placeholder="Search for your restaurant, eg. Greenland Cafe" />
            </div>
        </div>
    );
}


export default Listed;