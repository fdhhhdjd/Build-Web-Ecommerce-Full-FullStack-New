import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  auth: [],
  isAuthenticated: false,
  isAuthRegister: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.REGISTER_API_START:
    case types.LOGOUT_API_START:
    case types.GET_PROFILE_ACCOUNT_START:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case types.LOGIN_API_SUCCESS:
    case types.GET_PROFILE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        auth: action.payload,
      };
    case types.REGISTER_API_SUCCESS:
      return {
        loading: false,
        isAuthRegister: true,
      };
    case types.LOGOUT_API_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
      };

    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case types.LOGIN_API_FAIL:
    case types.REGISTER_API_FAIL:
    case types.LOGOUT_API_FAIL:
    case types.GET_PROFILE_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
