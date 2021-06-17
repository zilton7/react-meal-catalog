import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
import Nav from "./Nav";
import ItemPanel from "./ItemPanel";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  });
  return (
    <div className="App">
      <Nav />
      <ItemPanel />
    </div>
  );
};

export default App;
