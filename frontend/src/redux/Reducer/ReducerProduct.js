import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  product: [],
  productDetail: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCT_START:
    case types.GET_DETAIL_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.products,
      };
    case types.GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload.product,
      };

    case types.GET_ALL_PRODUCT_FAIL:
    case types.GET_DETAIL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
