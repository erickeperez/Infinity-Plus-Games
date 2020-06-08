import React from 'react'
import PS4 from '../images/ps4_logo.png'
import Xbox from '../images/xbox-one-2-logo.jpg'
import Nintendo from '../images/nintendo_logo.png'

function Platform() {
    return(
        <div className="platformCarousel">
            <div className="contentContainer-1440">
                <div className="consoleContent">
                    <a href="">
                        <img className="ps4" alt="PS4" src={PS4} />
                    </a>
                    <a href="" className="platformLogos">
                        <img className="xbox" alt="Xbox One" src={Xbox} />
                    </a>
                    <a href="">
                        <img className="nintendo" alt="Nintendo" src={Nintendo} />
                    </a>
                </div>
            </div>  
        </div>  /* platformCarousel ends */
    )
}


export default Platform