import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MealDetail = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains("close-meal-detail")) {
      history.push("/");
    }
  };

  const detail = useSelector((state) => state.detail);
  const mealData = detail.meal.meals[0];
  return (
    <div
      className="meal-detail-shadow close-meal-detail"
      onClick={exitDetailHandler}
    >
      <div className="meal-detail">
        <div className="meal-detail-head">
          <span className="close-meal-detail" onClick={exitDetailHandler}>
            X
          </span>
        </div>
        <div className="meal-detail-wrapper">
          <h3>{mealData.strMeal}</h3>
          <img src={mealData.strMealThumb} />{" "}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
