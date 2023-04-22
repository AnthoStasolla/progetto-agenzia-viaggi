import React from "react";

import "./Cards.css";

const Cards = ({ titolo, prezzo, durata, immagine }) => {
  return (
    <div className="col m-3 container-card1">
      <div className="box-card">
        <img src={immagine} alt="foto"></img>
        <div className="content-card">
          <h2 className="text-white fs-1">{titolo}</h2>
          <p className="text-white fs-2">{durata} gg</p>
          <p className="text-white fs-2">€ {prezzo}</p>
          <button className="btn btn-outline-light">Prenota ora</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
