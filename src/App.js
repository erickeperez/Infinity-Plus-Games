import React, {useState, useEffect} from 'react';
import './App.css';
import RegF from './Registration'

function App() {
// var myHeaders = new Headers();
// myHeaders.append("user-key", "f386d39d808b70168025bfadd8585517");
// myHeaders.append("Content-Type", "text/plain");
// myHeaders.append("Cookie", "__cfduid=de94ed42c783b84caa5238181e82a37651590868499");

// var raw = "fields id,name,popularity,url,summary,storyline,websites; limit 10; ";

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'https://api-v3.igdb.com/games'
// fetch(proxyUrl + targetUrl, requestOptions)
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     data.forEach(r => {
//       console.table(r)
//       var paragraph = document.getElementById("test");
//       var text = document.createTextNode(r.name);
//       paragraph.appendChild(text);
//     })
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });

  return (
    <div className="App">
      <RegF />
    </div>
  );
}

export default App;
