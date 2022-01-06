import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  auth: [],
  isAuthenticated: false,
  isAuthRegister: false,
  isUpdated: false,
};
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE_START:
    case types.UPDATE_PASSWORD_START:
    case types.UPDATE_PASSWORD_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PROFILE_SUCCESS:
    case types.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case types.UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case types.UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };

    case types.CLEAR_ERRORS_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case types.UPDATE_PROFILE_FAIL:
    case types.UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
