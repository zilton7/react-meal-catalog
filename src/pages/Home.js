import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMeals } from "../actions/mealsAction";
import Meal from "../components/Meal";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  const { vegetarian, vegan, seafood } = useSelector((state) => state.meals);
  console.log(vegan);
  return (
    <div>
      <h2>Meals</h2>
      <div>
        {vegan.map((meal) => (
          <Meal name={meal.strMeal} image={meal.strMealThumb} />
        ))}
      </div>
    </div>
  );
};

export default Home;
