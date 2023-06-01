import React from "react";
import "../../css/pages/pagenotfound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="center-div">
      <h1 className="biggest-text">404</h1>
      <div className="front">
        <h1 className="pg">PAGE NOT FOUND</h1>
        <Link to="/">
          <button className="button">Homepage</button>
        </Link>
      </div>
    </div>
  );
}
