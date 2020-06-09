import React from 'react'
import hero3 from '../images/hero3.jpeg'
 
function Hero() {
    return(
        <div className="heroContainer">
            <div className="hero">
                <img src={hero3}  alt="Carousel Banner" />
                <h2>Welcome to our infinite worlds</h2>
            </div>
        </div>
    )
} 


export default Hero