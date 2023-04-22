import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import Panelabout from "../Components/Panelabout";

const Aboutscreen = () => {
  return (
    <>
      <Hero>
        <h1>
          Da sempre offriamo{" "}
          <span className="span-color">i migliori viaggi</span>{" "}
          intercontinentali
        </h1>
        <Link to="/offerte" className="btn btn-lg btn-outline-light text-black">
          Scopri i nostri Viaggi
        </Link>
      </Hero>
      <Panelabout />
    </>
  );
};

export default Aboutscreen;
