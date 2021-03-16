import React from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <Menu />
    </div>
  );
}

export default App;
