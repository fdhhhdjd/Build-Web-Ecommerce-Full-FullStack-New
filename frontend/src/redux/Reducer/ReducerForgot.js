import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  message: [],
  success: [],
};
const ForgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORGOT_START:
    case types.RESET_FORGOT_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_FORGOT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case types.UPDATE_FORGOT_RESET:
      return {
        ...state,
      };
    case types.UPDATE_FORGOT_FAIL:
    case types.RESET_FORGOT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export default ForgotReducer;
