import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default props => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Dog Walks Through The Park
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/owners">
          Owners
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/dogs">
          Dogs
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/walkers">
          Walkers
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/neighborhoods">
          Neighborhoods
        </Link>
      </li>
    </ul>
  );
};
