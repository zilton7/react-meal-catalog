import axios from 'axios';
import { mealsByCategoryURL } from '../api';

const loadMeals = () => async (dispatch) => {
  const vegetarianMealsData = await axios.get(mealsByCategoryURL('Vegetarian'));
  const veganMealsData = await axios.get(mealsByCategoryURL('Vegan'));
  const seafoodMealsData = await axios.get(mealsByCategoryURL('Seafood'));

  dispatch({
    type: 'FETCH_MEALS',
    payload: {
      meals: [
        ...vegetarianMealsData.data.meals,
        ...veganMealsData.data.meals,
        ...seafoodMealsData.data.meals,
      ],
    },
  });
};

export default loadMeals;
