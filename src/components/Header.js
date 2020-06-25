import React from "react";

// Header function below

function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          Infinity Plus Games
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Newsletter
              </a>
            </li>
          </ul>

          <ul className="nav justify-content-end" style={{ width: "100%" }}>
            <li className="nav-item">
              <a className="nav-link" href="/#" style={{ color: "#fff" }}>
                Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Header;
