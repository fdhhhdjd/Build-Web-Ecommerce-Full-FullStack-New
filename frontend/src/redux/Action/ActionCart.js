import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?ADD TO CART
export const AddToCartStart = () => ({
  type: types.ADD_TO_CART_START,
});
export const AddToCartSuccess = (token) => ({
  type: types.ADD_TO_CART_SUCCESS,
  payload: token,
});
export const AddToCartFail = (error) => ({
  type: types.ADD_TO_CART_FAIL,
  payload: error,
});
//?Delete TO CART
export const DeleteToCartStart = () => ({
  type: types.DELETE_TO_CART_START,
});
export const DeleteToCartSuccess = (token) => ({
  type: types.DELETE_TO_CART_SUCCESS,
  payload: token,
});
export const DeleteToCartFail = (error) => ({
  type: types.DELETE_TO_CART_FAIL,
  payload: error,
});
//?SIPPING TO CART
export const ShippingToCartStart = () => ({
  type: types.SAVE_SIPPING_INFO_START,
});
export const ShippingToCartSuccess = (token) => ({
  type: types.SAVE_SIPPING_INFO_SUCCESS,
  payload: token,
});
export const ShippingToCartFail = (error) => ({
  type: types.SAVE_SIPPING_INFO_FAIL,
  payload: error,
});
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    dispatch(AddToCartStart());
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch(
      AddToCartSuccess({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      })
    );
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch(AddToCartFail(error), toast.error(error.response.data.message));
  }
};
//!REMOVE ADD
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch(DeleteToCartStart());
    dispatch(DeleteToCartSuccess(id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch(DeleteToCartFail(error));
  }
};
//!SAVE SIPPING
export const saveShippingInfo = (data) => async (dispatch) => {
  // try {
  //   dispatch(ShippingToCartStart());
  //   dispatch(ShippingToCartSuccess(data));
  //   localStorage.setItem("shippingInfo", JSON.stringify(data));
  // } catch (error) {
  //   dispatch(ShippingToCartFail(error));
  // }
  dispatch({
    type: types.SAVE_SIPPING_INFO_SUCCESS,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
