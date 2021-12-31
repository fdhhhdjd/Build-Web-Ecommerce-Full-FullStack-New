import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,

  login: [],
  register: [],
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.REGISTER_API_START:
    case types.LOGOUT_API_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_API_SUCCESS:
      return {
        ...state,
        loading: false,

        login: action.payload,
      };
    case types.REGISTER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        register: action.payload,
      };

    case types.LOGIN_API_FAIL:
    case types.REGISTER_API_FAIL:
    case types.LOGIN_API_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
