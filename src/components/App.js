import React from "react";
import Nav from "./Nav";
import ItemPanel from "./ItemPanel";
import Home from "../pages/Home";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <ItemPanel />
    </div>
  );
};

export default App;
