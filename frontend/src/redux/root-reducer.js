import { combineReducers } from "redux";
import AuthReducer from "./Reducer/ReducerAdmin";
import ProductReducer from "./Reducer/ReducerProduct";
import ProfileReducer from "./Reducer/ReducerProfile";
import ForgotReducer from "./Reducer/ReducerForgot";
const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  profile: ProfileReducer,
  forgot: ForgotReducer,
});
export default rootReducer;
