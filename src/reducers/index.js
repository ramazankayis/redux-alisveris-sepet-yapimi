import * as actionTypes from '../actions/actionTypes';
import { data } from '../data';

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEPETE_EKLE:
      return {
        ...state,
        cart: [
          ...(state.cart.find((cartItem) => cartItem.id === action.payload.id)
            ? state.cart.map((cartItem) =>
                cartItem.id === action.payload.id
                  ? { ...cartItem, count: cartItem.count + 1 }
                  : cartItem
              )
            : [...state.cart, { ...action.payload, count: 1 }]),
        ],
      };

    case actionTypes.SEPETTEN_CIKAR:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case actionTypes.ARTTIR:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        ),
      };
      case actionTypes.AZALT:
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem,count: cartItem.count>1 ? cartItem.count - 1 : 1 }
              : cartItem
          ),
        };
    default:
      return state;
  }
};
