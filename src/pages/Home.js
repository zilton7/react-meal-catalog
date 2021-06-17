import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMeals } from "../actions/mealsAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  });

  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
