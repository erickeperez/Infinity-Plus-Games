import React from 'react'
import heroBann from '../images/hero-banner.jpg'
 
function Hero() {
    return(
        <div className="heroContainer">
            <div className="hero">
                <img src={heroBann} />
                <h2>Welcome to our infinite worlds</h2>
            </div>
        </div>
    )
} 


export default Hero