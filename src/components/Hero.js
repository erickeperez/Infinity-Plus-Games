import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function Hero() {
  const [heroImg, setHeroImg] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=ign&pageSize=3&apiKey=${process.env.REACT_APP_HERO_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          setHeroImg(result.articles);
        },
       
        (error) => {
        }
      )
  }, [])

  const listItems = heroImg.map((arr, index) =>
  <Carousel.Item> 
    <div>
    <img
          className="d-block w-100 img-responsive"
          key={index}
          src={arr.urlToImage}
          alt="First slide"
        />
    </div>
  </Carousel.Item>
  );
  
  return (
  
    <Carousel>
    {listItems}
     
    </Carousel>
  );
}

export default Hero;
