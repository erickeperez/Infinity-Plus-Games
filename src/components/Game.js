import React, { useState, useEffect } from "react";
import emptyImage from "../images/empty.png";

function Game() {
  const [gameInfo, setGameInfo] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("user-key", process.env.REACT_APP_GAME_API_KEY);
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append(
      "Cookie",
      "__cfduid=de94ed42c783b84caa5238181e82a37651590868499"
    );

    var raw =
      "fields id,name,popularity,url,summary,storyline,websites,cover.url; limit 20; ";

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
        setGameInfo(data);
        return data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }, []);

  const cardWidth = {
    width: "18rem",
  };
  const fullWidth = {
    width: "100%",
  };

  const gameItems = gameInfo.map((game, index) => (
    <div className="card m-2" key={index} style={cardWidth}>
      {game.cover !== undefined ? (
        <img
          src={game.cover.url}
          className="card-img-top"
          style={fullWidth}
          alt="Game"
        />
      ) : (
        <img
          src={emptyImage}
          className="card-img-top"
          style={fullWidth}
          alt="Game"
        />
      )}

      <div className="card-body">
        <h5 id="name" className="card-title">
          {game.name}
        </h5>
        {game.summary !== undefined ? (
          <p className="card-text">{game.summary}</p>
        ) : (
          <p className="card-text">No description available.</p>
        )}
        <a
          href={game.url}
          className="btn btn-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to website
        </a>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div id="game-container-row" className="row">
        {gameItems}
      </div>
    </div>
  );
}

export default Game;
