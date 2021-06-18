import React from "react";
import Nav from "./Nav";
import Home from "../pages/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route path={["/meal/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
