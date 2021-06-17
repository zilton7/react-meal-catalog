import axios from "axios";
import { mealsURL, mealsByCategoryURL } from "../api";

export const loadMealCategories = () => async (dispatch) => {
  const mealsData = await axios.get(mealsURL);
  dispatch({
    type: "FETCH_MEAL_CATEGORIES",
    payload: {
      meals: mealsData.data.categories
        .filter((c) => ["Vegan", "Vegetarian"].includes(c.strCategory))
        .map((c) => c.strCategory),
    },
  });
};

export const loadMeals = () => async (dispatch) => {
  const mealsData = await axios.get(mealsByCategoryURL("Vegetarian"));
  dispatch({
    type: "FETCH_MEALS",
    payload: {
      meals: mealsData.data,
    },
  });
};
