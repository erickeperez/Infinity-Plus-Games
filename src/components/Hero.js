import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap';
 
function Hero() {
  // const [startIndex, setStartIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setStartIndex(1);
  // };


  fetch(`https://newsapi.org/v2/top-headlines?sources=ign&pageSize=3&apiKey=${process.env.REACT_APP_HERO_API_KEY}`)
    .then((blob) => blob.json())
    .then((data) => {
      data.articles.map((r, index) => {
        var carouselBody = document.getElementById("carousel-inner");
        carouselBody.insertAdjacentHTML(
          "afterbegin",
          index === 0 ?
         `<div class="carousel-item active carousel-${index}">
          <img class="d-block w-100" src="${r.urlToImage}" alt="Game Slide"/>
        </div>` :
        `<div class="carousel-item carousel-${index}">
        <img class="d-block w-100" src="${r.urlToImage}" alt="Game Slide"/>
      </div>`
      
        );
      });
      // data.articles.forEach((r, index) => {
      // //   // console.log(index)
      //   var carouselBody = document.getElementById("carousel-inner");
      //   carouselBody.insertAdjacentHTML(
      //     "afterbegin",
      //    `<div class="carousel-item active ${index}">
      //     <img class="d-block w-100" src="${r.urlToImage}" alt="Game Slide"/>
      //   </div>` 
      //   );
      // });
      return data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

    return (
    <Carousel id="carousel-inner" >
  
</Carousel>

  );

} 

export default Hero



