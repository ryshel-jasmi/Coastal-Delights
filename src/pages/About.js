import React from "react";
import about from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Coastal Delights: Where Mangalorean cuisine meets coastal charm. Dive into a culinary journey that celebrates tradition and innovation. Our dishes, crafted with passion and finest ingredients, promise to tantalize your taste buds with the flavors of the sea. Join us and experience the vibrant essence of Mangalore on your plate.Our passionate chefs meticulously craft each dish with the finest ingredients, infusing every creation with the essence of coastal charm. Whether you crave the fiery heat of a traditional gassi or the comforting warmth of a steaming plate of neer dosa, our menu promises to tantalize your taste buds and leave you craving for more.
        </p>
      </div>
    </div>
  );
}

export default About;
