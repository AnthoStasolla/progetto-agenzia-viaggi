import React from "react";
import Hero from "../Components/Hero";
import heroofferte from "../assets/immagini/heroofferte.jpg";
import Cards from "../Components/Cards";
import { tripcard } from "../links";

const Offertescreen = () => {
  return (
    <>
      <Hero img={heroofferte}>
        <h1>
          Sempre alla ricerca di nuove mete
          <br /> <span className="span-color">imperdibili</span>
        </h1>
      </Hero>
      <div className="container ">
        <div className="row">
          {tripcard.map((card) => {
            return <Cards key={card.id} {...card} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Offertescreen;
