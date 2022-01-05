import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
//?Register
export const RegisterStart = () => ({
  type: types.REGISTER_API_START,
});
export const RegisterSuccess = (apis) => ({
  type: types.REGISTER_API_SUCCESS,
  payload: apis,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_API_FAIL,
  payload: error,
});
//?Login
export const LoginStart = () => ({
  type: types.LOGIN_API_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_API_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_API_FAIL,
  payload: error,
});
//?Logout
export const LogoutStart = () => ({
  type: types.LOGOUT_API_START,
});
export const LogoutSuccess = () => ({
  type: types.LOGOUT_API_SUCCESS,
});
export const LogoutFail = (error) => ({
  type: types.LOGOUT_API_FAIL,
  payload: error,
});

//?Get profile
export const GetProfileStart = () => ({
  type: types.GET_PROFILE_ACCOUNT_START,
});
export const GetProfileSuccess = (token) => ({
  type: types.GET_PROFILE_ACCOUNT_SUCCESS,
  payload: token,
});
export const GetProfileFail = (error) => ({
  type: types.GET_PROFILE_ACCOUNT_FAIL,
  payload: error,
});

//?forget
export const ForgetStart = () => ({
  type: types.FORGET_ADMIN_START,
});
export const ForgetSuccess = (admin) => ({
  type: types.FORGET_ADMIN_SUCCESS,
  payload: admin,
});
export const ForgetFail = (error) => ({
  type: types.FORGET_ADMIN_FAIL,
  payload: error,
});
//?upload profile
export const UploadProfileStart = () => ({
  type: types.UPDATE_PROFILE_START,
});
export const UploadProfileSuccess = (admin) => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  payload: admin,
});
export const UploadProfileFail = (error) => ({
  type: types.UPDATE_PROFILE_FAIL,
  payload: error,
});
//!Register
export const RegisterInitiate = (userData) => async (dispatch) => {
  try {
    dispatch(RegisterStart());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/register`, userData, config);

    dispatch(
      RegisterSuccess(data.user),
      toast.success("Register Successfully 💖")
    );
  } catch (error) {
    dispatch(
      RegisterFail(error.response.data.message),
      toast.error(error.response.data.message)
    );
  }
};
//!Login
export const loginInitiate = (email, password) => async (dispatch) => {
  try {
    dispatch(LoginStart());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch(LoginSuccess(data.user), toast.success("Login Successfully 💖"));
  } catch (error) {
    dispatch(
      LoginFail(error.response.data.message),
      toast.error(error.response.data.message)
    );
  }
};
//!Logout
export const LogoutInitiate = () => async (dispatch) => {
  try {
    dispatch(LogoutStart());
    await axios.get(`/api/v1/logout`);
    dispatch(LogoutSuccess(), toast.success("Logout Successfully 💖"));
  } catch (error) {
    dispatch(
      LogoutFail(error.response.data.message),
      toast.error(error.response.data.message)
    );
  }
};

//!Forget Admin
export const ForgetAdminInitiate = (email) => {
  return async function (dispatch) {
    dispatch(ForgetStart());
    await axios
      .post("/admin/forgotPassword", { email })
      .then((user) => {
        dispatch(ForgetSuccess(user.data));
      })
      .catch((error) => {
        dispatch(ForgetFail(error.data));
      });
  };
};
//!Get profile
export const LoadProfileInitiate = () => async (dispatch) => {
  try {
    dispatch(GetProfileStart());

    const { data } = await axios.get(`/api/v1/me`);

    dispatch(GetProfileSuccess(data.user));
  } catch (error) {
    dispatch(GetProfileFail(error.response.data.message));
  }
};
//!Get profile
export const UploadProfileInitiate = (userData) => async (dispatch) => {
  try {
    dispatch(dispatch(UploadProfileStart()));

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/me/update`, userData, config);

    dispatch(UploadProfileSuccess(data.success), toast.success("edit oke"));
  } catch (error) {
    dispatch(UploadProfileFail(error.response.data.message));
  }
};

//!CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_ERRORS_SUCCESS });
};
