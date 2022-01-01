import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
import ProductReducer from "./Reducer/ReducerProduct";
const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
});
export default rootReducer;
