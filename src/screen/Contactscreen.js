import React from "react";
import Hero from "../Components/Hero";
import contacthero from "../assets/immagini/contacthero.jpg";
import Form from "../Components/Form";

const Contactscreen = () => {
  return (
    <>
      <Hero img={contacthero}>
        <h1>
          Contattaci per avere{" "}
          <span className="span-color">maggiori informazioni</span>
          <br /> sui nostri <span className="span-color">viaggi</span>
        </h1>
      </Hero>
      <Form />
    </>
  );
};

export default Contactscreen;
