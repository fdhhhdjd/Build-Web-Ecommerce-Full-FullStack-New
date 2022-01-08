import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  cartItems: [],
  shippingInfo: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART_START:
    case types.DELETE_TO_CART_START:
    case types.SAVE_SIPPING_INFO_START:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_TO_CART_SUCCESS:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case types.DELETE_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case types.SAVE_SIPPING_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        shippingInfo: action.payload,
      };

    case types.ADD_TO_CART_FAIL:
    case types.DELETE_TO_CART_FAIL:
    case types.SAVE_SIPPING_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CartReducer;
