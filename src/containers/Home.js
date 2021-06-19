import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import loadMeals from '../actions/mealsAction';
import Meal from '../components/Meal';
import MealDetail from './MealDetail';

const Home = () => {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeals());
  }, [dispatch]);
  let meals = useSelector((state) => state.meals.meals);

  if (input.length > 0) {
    meals = meals.filter((meal) => meal.strMeal.match(input));
  }

  return (
    <div>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for Meal"
          onChange={handleChange}
          value={input}
        />
      </div>
      {pathId && <MealDetail />}
      <div className="meals">
        {meals.map((meal) => (
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
