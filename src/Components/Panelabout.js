import React from "react";
import "./Panelabout.css";
import about1 from "../assets/immagini/about1.jpg";
import about2 from "../assets/immagini/about2.jpg";

const Panelabout = () => {
  return (
    <>
      <div className="about mt-2">
        <div className="left">
          <h3>Chi siamo</h3>
          <p>
            {" "}
            Around 50 years ago, the editors of a magazine called Travel &
            Camera made a big leap forward, embracing not just photography, but
            the entire world. They'd cover food, wine, fashion, hotels, cruises,
            beaches, cities, hiking, skiing — just about anything that anybody
            would do for fun.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img1">
              <img
                src={about1}
                alt="foto"
                style={{
                  maxHeight: "30rem",
                  maxWidth: "30rem",
                }}
              />
            </div>
            <div className="img1">
              <img
                src={about2}
                alt="foto"
                style={{ maxHeight: "30rem", maxWidth: "30rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panelabout;
