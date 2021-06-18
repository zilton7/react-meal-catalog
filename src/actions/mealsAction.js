import axios from "axios";
import { mealsByCategoryURL } from "../api";

export const loadMeals = () => async (dispatch) => {
  const vegetarianMealsData = await axios.get(mealsByCategoryURL("Vegetarian"));
  const veganMealsData = await axios.get(mealsByCategoryURL("Vegan"));
  const seafoodMealsData = await axios.get(mealsByCategoryURL("Seafood"));

  dispatch({
    type: "FETCH_MEALS",
    payload: {
      vegetarianMeals: vegetarianMealsData.data.meals,
      veganMeals: veganMealsData.data.meals,
      seafoodMeals: seafoodMealsData.data.meals,
    },
  });
};
