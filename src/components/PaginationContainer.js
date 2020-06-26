import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

function PaginationContainer() {
  const [activePage, setActivePage] = useState(1);
  const [gameData, setGameData] = useState([]);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("user-key", process.env.REACT_APP_GAME_API_KEY);
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append(
      "Cookie",
      "__cfduid=de94ed42c783b84caa5238181e82a37651590868499"
    );

    var raw =
      "fields id,name,popularity,url,summary,storyline,websites,cover.url; limit 40; ";

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://api-v3.igdb.com/games";

    fetch(proxyUrl + targetUrl, requestOptions)
      .then((blob) => blob.json())
      .then((data) => {
        // console.table(data);
        data.forEach((r) => {
          setGameData(data.length);
        });
        return data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }, []);
  // console.log("game Data", gameData);

  function handlePageChange(page) {
    console.log(`active page is ${page}`);
    // setActivePage(pageNumber);
  }

  const pageItem = [];

  for (let number = 1; number <= gameData / perPage; number++) {
    pageItem.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => setActivePage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  

  return (
    <Pagination size="lg" className="justify-content-center" >
      <Pagination.Prev className={activePage == 1 ? 'disabled' : ''} 
                        onClick={() => setActivePage(activePage - 1)}/>
      {pageItem}
      <Pagination.Next className={activePage == gameData / perPage ? 'disabled' : ''} 
                        onClick={() => setActivePage(activePage + 1)}/>
    </Pagination>
  );
}

export default PaginationContainer;


// code for changes below

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination>
//   </div>
// );

// render(paginationBasic);
