import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?get All Product
export const GetAllProductStart = () => ({
  type: types.GET_ALL_PRODUCT_START,
});
export const GetAllProductSuccess = (token) => ({
  type: types.GET_ALL_PRODUCT_SUCCESS,
  payload: token,
});
export const GetAllProductFail = (error) => ({
  type: types.GET_ALL_PRODUCT_FAIL,
  payload: error,
});
//?get Detail Product
export const GetDetailProductStart = () => ({
  type: types.GET_DETAIL_PRODUCT_START,
});
export const GetDetailProductSuccess = (token) => ({
  type: types.GET_DETAIL_PRODUCT_SUCCESS,
  payload: token,
});
export const GetDetailProductFail = (error) => ({
  type: types.GET_DETAIL_PRODUCT_FAIL,
  payload: error,
});

//! Get All Product
export const GetAllProductInitiate = (keyword = "") => {
  return async function (dispatch) {
    dispatch(GetAllProductStart());
    await axios
      .get(`/api/v1/products?keyword=${keyword}`)
      .then((product) => {
        dispatch(GetAllProductSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetAllProductFail(error.data));
      });
  };
};
//! Get Detail Product
export const GetDetailProductInitiate = (id) => {
  return async function (dispatch) {
    dispatch(GetDetailProductStart());
    await axios
      .get(`/api/v1/product/${id}`)
      .then((product) => {
        dispatch(GetDetailProductSuccess(product.data));
      })
      .catch((error) => {
        dispatch(GetDetailProductFail(error.data));
      });
  };
};
