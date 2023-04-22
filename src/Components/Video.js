import React from "react";
import "./Video.css";
import videohome from "../assets/video/videohome.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <>
      <div className="hero">
        <video autoPlay muted loop id="video">
          <source src={videohome} type="video/mp4" />
        </video>
        <div className="content">
          <h1 className="text-video">TRAVELILLI</h1>
          <p className="text-video">Prenota il Tuo Viaggio Da Sogno</p>
          <Link to="/offerte" className="btn btn-lg btn-outline-dark">
            Scopri i nostri Viaggi
          </Link>
        </div>
      </div>
    </>
  );
};

export default Video;
