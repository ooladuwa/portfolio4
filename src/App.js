import React from "react";
import { Route, Switch } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  ) 
}

export default App;
