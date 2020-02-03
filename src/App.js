import React, { Component } from "react";
import logo from "./logo.svg";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Header branding="Contact Manager1" />
      <Contact name="Lyubima Takova" email="lyubima@abv.bg" phone="00" />
      <Contact name="Lyubima Tava" email="lyuba@abv.bg" phone="001" />
      <Contact name="Lyubimma Takova" email="lyubimwa@abv.bg" phone="0022" />
    </div>
  );
}

export default App;
