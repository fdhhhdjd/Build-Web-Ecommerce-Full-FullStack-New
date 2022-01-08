import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
import ProductReducer from "./Reducer/ReducerProduct";
import ProfileReducer from "./Reducer/ReducerProfile";
import ForgotReducer from "./Reducer/ReducerForgot";
import CartReducer from "./Reducer/ReducerCart";
const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  profile: ProfileReducer,
  forgot: ForgotReducer,
  cart: CartReducer,
});
export default rootReducer;
