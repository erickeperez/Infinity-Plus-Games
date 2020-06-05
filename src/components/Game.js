import React from 'react'
import emptyImage from '../images/empty.png'

function Game() {
var myHeaders = new Headers();
    myHeaders.append("user-key", "f386d39d808b70168025bfadd8585517");
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Cookie", "__cfduid=de94ed42c783b84caa5238181e82a37651590868499");

var raw = "fields id,name,popularity,url,summary,storyline,websites,cover.url; limit 10; ";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api-v3.igdb.com/games'

    fetch(proxyUrl + targetUrl, requestOptions)
    .then(blob => blob.json())
    .then(data => {
        // console.table(data);
    data.forEach(r => {
      console.table("Name ", r.name, "Cover ", r.cover)
    var paragraph = document.getElementById("game-container-row");

    // {r.cover == "" ? `<img src="#" className="card-img-top" alt="" /> ` : `<img src="${r.cover}" className="card-img-top" alt="" /> `  }
    
    paragraph.insertAdjacentHTML('afterbegin', 
    `<div className="card" style="width: 18rem; padding:25px;"> 
    ${r.cover !== undefined ? `<img src="${r.cover.url}" className="card-img-top" style="width: 100%" alt="" /> ` : `<img src=${emptyImage} className="card-img-top" style="width: 100%" alt="" /> ` }
        
        <div className="card-body"> 
          <h5 id="name" className="card-title">${r.name}</h5> 
          ${r.summary !== undefined ? `<p className="card-text">${r.summary}</p> ` : `<p className="card-text">No description available.</p> ` } 
          <a href="${r.url}" className="btn btn-primary">Go to website</a> 
        </div> 
     </div>`);
  })
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });


    return(
        <div className="container">
          <div id="game-container-row" className="row">

          </div>
           
        </div>
    )
}

export default Game