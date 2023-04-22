import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white mt-5 p-5 ">
        <div className="container shadow">
          <h4 className="text-white fs-2">Contattaci e tieniti aggiornato</h4>
          <p className="text-white fs-5">
            Visita la nostra pagina Youtube e Instagram per tenerti aggiornato
            sulle nuove destinazioni di TRAVELILLI.
          </p>
          <p className="text-white fs-5">
            <FaYoutube size={30} style={{ color: "red", margin: "4px" }} />
            YOUTUBE -{" "}
            <FaInstagram size={30} style={{ color: "violet", margin: "4px" }} />
            INSTAGRAM
          </p>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com - TRAVELILLI 2023
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
