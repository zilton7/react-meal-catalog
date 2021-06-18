const initialState = {
  vegan: [],
  vegetarian: [],
  seafood: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return {
        ...state,
        vegetarian: action.payload.vegetarianMeals,
        vegan: action.payload.veganMeals,
        seafood: action.payload.seafoodMeals,
      };
    default:
      return { ...state };
  }
};

export default mealsReducer;
