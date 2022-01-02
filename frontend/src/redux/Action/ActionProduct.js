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
export const GetAllProductInitiate = (
  keyword = "",
  currentPage = 1,
  price = [0, 25000],
  category,
  ratings = 0
) => {
  return async function (dispatch) {
    dispatch(GetAllProductStart());
    let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
    if (category) {
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
    } else if ((category = "")) {
      link = `/api/v1/products`;
    }

    await axios
      .get(link)
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
