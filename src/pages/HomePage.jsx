// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/homePage.css";
import Home from "../sections/Home/Home";
import Adopt from "../sections/Adopt/Adopt";
import Historys from "../sections/Historys/Historys";
import Hero from "../sections/Hero/Hero";
// import Guide from "../sections/Guide/Guide";

function HomePage() {
  return (
    <main className="container">
      <Home />
      <Adopt />
      <Historys />
      <Hero />
    </main>
  );
}

export default HomePage;
