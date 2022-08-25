import React from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'
const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const NavBar = () => {
  const newsCategory = ['business','entertainment','environment','food','health','politics','science','sports','technology','world'];

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewBuddy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {newsCategory.map((catName) => {
                return(
                    <li className="nav-item" key={catName}>
                    <Link className="nav-link" to={`/${catName}`}>
                      {capitalize(catName)}
                    </Link>
                    </li>
                  )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
