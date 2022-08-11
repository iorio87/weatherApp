import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import foto from "../img/luciano.jpg";

export default function About() {
  return (
    <>
      <div className="body">
        <h1 className="text-lg">Luciano Petrate</h1>
        <p>FullStack Developer</p>
        <img src={foto} alt="" className="imagen" />
        <p>A simple Wheater App using:</p>
       <ul>
        <li>React</li>
        <li>Pure CSS</li>
        <li>Weather API</li>
        <li></li>
       </ul>
      </div>
    </>
  );
}
