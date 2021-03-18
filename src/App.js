import React from "react";
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar";

import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
      <Route exact path="about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </div>
    
  ) 
}

export default App;
