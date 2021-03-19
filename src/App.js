import React from "react";
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="App">
      <Switch>
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
