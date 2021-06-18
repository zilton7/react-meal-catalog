import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
  detail: detailReducer,
});

export default rootReducer;
