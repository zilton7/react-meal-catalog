import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  const meals = useSelector((state) => state.meals);
  console.log(meals);
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
