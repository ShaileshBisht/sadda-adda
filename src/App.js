import React from "react";
import "./App.css";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import Menu from "./component/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubMenu from "./component/SubMenu";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/submenu">
            <SubMenu />
          </Route>
          <Route exact path="/">
            <NavBar />
            <HeroSection />
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
