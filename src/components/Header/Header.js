import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          The MealDB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-capitalize">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                customer's review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                food ingredients
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
