import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1 style={{ color: "black", fontFamily: "Roboto, sans-serif", fontWeight: 700 }}>Coastal Delights</h1>
        <p style={{ color: "black", fontFamily: "Pacifico, cursive" }}>WHERE TRADITION MEETS TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
