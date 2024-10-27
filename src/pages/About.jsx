// eslint-disable-next-line no-unused-vars
import React from "react";
import Weare from "../sections/Weare/Weare";
import "../styles/homePage.css";
import Guide from "../sections/Guide/Guide";

function About() {
  return (
    <main className="container">
      <Weare />
      <Guide />
    </main>
  );
}

export default About;
