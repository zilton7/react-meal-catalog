import React from "react";
import { useSelector } from "react-redux";

const GameDetail = () => {
  const detail = useSelector((state) => state.detail);
  const mealData = detail.meal.meals[0];
  return (
    <div>
      <h3>{mealData.strMeal}</h3>
      <img src={mealData.strMealThumb} />
    </div>
  );
};

export default GameDetail;
