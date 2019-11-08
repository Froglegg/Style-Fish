import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { logOut } from "../../utils/Session";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/Home" className="navbar-brand">
        <img
          src="/assets/StyleFishLogo.png"
          width="50px"
          height="50px"
          className="logo"
          alt="StyleFish Logo"
        ></img>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {props.session ? (
            <>
              <li className="nav-item">
                <Link
                  to="/Home"
                  className={
                    window.location.pathname === "/Home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">Go Fish</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/MyCloset"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/MyCloset"
                >
                  <div className="NavLinks">My Closet</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className={
                    window.location.pathname === "/About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className={
                    window.location.pathname === "/LogOut"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    logOut();
                  }}
                >
                  <div className="NavLinks">Log Out</div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  to="/About"
                  className={
                    window.location.pathname === "/About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className={
                    window.location.pathname === "/LogIn"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">Log In</div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
