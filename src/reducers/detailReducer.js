const initialState = { game: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        meal: action.payload.meal,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
