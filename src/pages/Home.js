import { Game } from "phaser";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
import Meal from "../components/Meal";
import MealDetail from "../components/MealDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  const { vegetarian, vegan, seafood } = useSelector((state) => state.meals);
  console.log(vegan);
  return (
    <div>
      {pathId && <MealDetail />}
      <h2>Meals</h2>
      <div className="games">
        {vegan.map((meal) => (
          <Meal
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))}
        {vegetarian.map((meal) => (
          <Meal
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))}
        {seafood.map((meal) => (
          <Meal
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
