import { combineReducers } from "redux";
import contentReducer from "./contentReducers";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  filter: filterReducer,
});

export default rootReducer;
