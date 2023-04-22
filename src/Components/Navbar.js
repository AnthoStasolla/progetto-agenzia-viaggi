import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { GiPalmTree } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Socialbar from "./Socialbar";

const Navbar = () => {
  const { handleClick, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="text-brand">TRAVELILLI</h1>
        </Link>
        <ul className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
          <div className="d-flex">
            <GiPalmTree size={30} color="lime" />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Chi siamo</Link>
          </li>
          <li>
            <Link to="/offerte">Offerte</Link>
          </li>
          <li>
            <Link to="/contact">Contattaci</Link>
          </li>
        </ul>
        <Socialbar className="social-bar1" />
        <div className="hamburger" onClick={handleClick}>
          {isSidebarOpen ? <CgCloseO size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
