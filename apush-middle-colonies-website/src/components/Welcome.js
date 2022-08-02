import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="welcome-div">
            <header>
                <img className="logo" style={{marginRight: "10px"}} src="/images/TCA-Logo.png"/>
                <h1>The Colonial Awakening</h1>
                <p>An argumentative based newspaper of the middle colonies</p>
                <hr />
            </header>
            <main>
                <h3>Top articles from the 1700-1750's</h3>
                <div className="opening-images">
                    <img src="https://i.ytimg.com/vi/Hd_evwm7N48/maxresdefault.jpg" height="300"/>
                    <img src="https://cdn.kastatic.org/googleusercontent/Isaa5rKnaUnU4Z02hNSbKDjoowEqXL_rrE1QMtWfvsubmZshjXLSt0vrBGJ57L58Mn44ygJ29OBbFDloYk5nXTEdlw" height="300"/>
                </div>
                <div className="grouped-article-buttons">
                    <Link to="/about-us">About Us</Link>
                    <Link to="/work-cited">Work Cited</Link>
                    <Link to="/abigail">First Article</Link>
                </div>
            </main>
        </div>
    )
}
