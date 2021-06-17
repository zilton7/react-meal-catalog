const initialState = {
  meals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return { ...state };
    default:
      return { ...state };
  }
};

export default mealsReducer;
