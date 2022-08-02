import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <div className="about-us-div">
            <h1>The Colonial Awakening Writers</h1>
            <div className="grouped-authors">
                <div>
                    <h3>Article 1</h3>
                    <h4>Author: Abigail</h4>
                </div>
                <div>
                    <h3>Article 2</h3>
                    <h4>Author: Kyla</h4>
                </div>
                <div>
                    <h3>Article 3</h3>
                    <h4>Author: Lenny</h4>
                </div>
            </div>
            <div className="grouped-authors">
                <div>
                    <h3>Article 4</h3>
                    <h4>Author: Hewan</h4>
                </div>
                <div>
                    <h3>Article 5</h3>
                    <h4>Author: Jordan</h4>
                </div>
                <div>
                    <h3>Article 6</h3>
                    <h4>Author: Kaarli</h4>
                </div>    
            </div>
            <Link to="/">Home</Link>        
        </div>
    )
}
