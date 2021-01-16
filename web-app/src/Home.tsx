import React, { useState, useEffect } from "react";
import illustration from "./undraw_happy_music_g6wc.svg";
import "./Home.css";

const Home = () => {
  return (
    <section className="Illustration-container">
      <div>
        <h1 className="content">Find what your Audience loves to hear</h1>
        <h4 className="content">Access the Metrics that matter</h4>
        <h4> Provide your listeners with the best music experience</h4>
      </div>
      <img src={illustration} className="image-container"></img>
    </section>
  );
};

export default Home;
