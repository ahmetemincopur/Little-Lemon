import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/reservations">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src="./fofo.jpg" alt="Content"></img>
      </div>
    </div>
  );
};

export default Hero;
