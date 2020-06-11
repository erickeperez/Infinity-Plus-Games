import React from 'react'

function HeroApi() {
    
    // var breakingNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d";
    // fetch(breakingNews, function (data) {
    //    console.log('NEWS API ', data)
    // });
    
    // fetch("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //       result.forEach((r) => {
              
    //           var paragraph = document.getElementById("hero-container-row");
    //           console.log(r)
            
            
    //         paragraph.insertAdjacentHTML(
    //             "afterbegin",`<h1>test</h1>`)
    //     })
    //   }
    //   )
    // .catch((e) => {
    //   console.log(e);
    //   return e;
    // });


    fetch("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d")
    .then((blob) => blob.json())
    .then((data) => {
      // console.table(data);
      data.forEach((r) => {
        // console.table("Name ", r.name, "Cover ", r.cover);
        var paragraph = document.getElementById("hero-container-row");

        paragraph.insertAdjacentHTML(
          "afterbegin",
          `<div class="card m-2" style="width: 18rem;"> 
        <div class="card-body"> 
          <h5 id="name" class="card-title"></h5> 
          <p class="card-text"></p> 
             
          <a href="#" class="btn btn-dark">Go to website</a> 
        </div> 
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
        <div className="container">
      <div id="hero-container-row" className="row"></div>
    </div>
    )
}


export default HeroApi