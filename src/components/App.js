import React from "react";
import Nav from "./Nav";
import Home from "../pages/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/:id">
        <Nav />
      </Route>
    </div>
  );
};

export default App;
