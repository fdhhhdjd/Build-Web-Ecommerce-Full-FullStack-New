import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
const rootReducer = combineReducers({
  auth: AuthReducer,
});
export default rootReducer;
