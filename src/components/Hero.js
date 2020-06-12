import React from 'react'
 
function Hero() {
  fetch(`https://newsapi.org/v2/top-headlines?sources=ign&pageSize=3&apiKey=${process.env.REACT_APP_HERO_API_KEY}`)
    .then((blob) => blob.json())
    .then((data) => {
      console.log(data.articles);
      data.articles.forEach((r) => {
        var paragraph = document.getElementById("carousel-inner");
        paragraph.insertAdjacentHTML(
          "afterbegin",
          `<div className="carousel-item active">
          <img className="d-block w-100" src="${r.urlToImage}" alt="Game Slide"/>
        </div>`
        );
      });
      return data;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
    
    return(
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" id="carousel-inner">
       
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
} 

export default Hero



