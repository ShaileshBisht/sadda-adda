import React from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
