import React from "react";
import { useSelector } from "react-redux";

const MealDetail = () => {
  const detail = useSelector((state) => state.detail);
  const mealData = detail.meal.meals[0];
  return (
    <div className="meal-detail-shadow">
      <div className="meal-detail">
        <div className="meal-detail-wrapper">
          <h3>{mealData.strMeal}</h3>
          <img src={mealData.strMealThumb} />{" "}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
