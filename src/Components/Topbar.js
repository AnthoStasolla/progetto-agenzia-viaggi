import React from "react";
import { Link } from "react-router-dom";
import { GiPalmTree } from "react-icons/gi";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import "./Topbar.css";

const Topbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary topbar">
        <div className="container align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <GiPalmTree
              style={{
                width: "35px",
                height: "35px",
                color: "#2f8b3b",
              }}
            />
            <span className="topbar-text">TRAVELILLI</span>
          </Link>

          <h6 className="topbar-text">
            <FaMailBulk
              style={{
                width: "15px",
                height: "15px",
              }}
            />
            travelilli@gmail.com
          </h6>
          <h6 className="topbar-text">
            <FaPhone
              style={{
                width: "15px",
                height: "15px",
                color: "green",
              }}
            />
            358/452561
          </h6>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
