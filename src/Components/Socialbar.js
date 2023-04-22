import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Socialbar = () => {
  return (
    <>
      <div className="social-bar1">
        <ul className="navbar-nav flex-row mb-1">
          <li className="nav-item">
            <a
              className="nav-link pe-2"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
              rel="nofollow"
            >
              <i className="fab fa-youtube">
                <FaYoutube style={{ color: "red" }} size={23} />
              </i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link px-2"
              href="https://www.facebook.com/mdbootstrap"
              rel="nofollow"
            >
              <i className="fab fa-facebook-f">
                <FaFacebook style={{ color: "blue" }} size={23} />
              </i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link px-2"
              href="https://twitter.com/MDBootstrap"
              rel="nofollow"
            >
              <i className="fab fa-twitter">
                <FaTwitter style={{ color: "cyan" }} size={23} />
              </i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link ps-2"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              rel="nofollow"
            >
              <i className="fab fa-github">
                <FaGithub style={{ color: "black" }} size={23} />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socialbar;
