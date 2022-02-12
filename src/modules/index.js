import { combineReducers } from "redux";
import yoso from "./yoso";
import mymarker from "./mymarker";
import mymap from "./mymap";

const rootReducer = combineReducers({
  yoso,
  mymarker,
  mymap,
});

export default rootReducer;
