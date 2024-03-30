import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const initialState = {
  cart: [],
  /*  cart: [
      {pizzaId: 12, name:'중부피자', quantity: 2, unitPrice: 15, totalPrice: 30, },
      {pizzaId: 1, name:'채소피자', quantity: 3, unitPrice: 5, totalPrice: 15, },
    ]*/
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItem(state, action) {
        // payload = newItem
        const index = action.payload.pizzaId
        if (state.cart.map((item) => item.pizzaId).includes(index)) return;
        else
          state.cart.push(action.payload)
      },
      deleteItem(state, action) {
        // payload = pizzaId
        state.cart = state.cart
          .filter(item => item.pizzaId !== action.payload)
      },
      increaseItemQuantity(state, action) {
        // payload = pizzaId
        const item = state.cart
          .find(item => item.pizzaId === action.payload); // 기존 객체를 변경
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      },
      decreaseItemQuantity(state, action) {
        // payload = pizzaId
        let item = state.cart
          .find(item => item.pizzaId === action.payload); // 기존 객체를 변경
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      },
      clearCart(state) {
        state.cart = [];
      },
    },
  }
);

export const {
  addItem, deleteItem,
  increaseItemQuantity, decreaseItemQuantity, clearCart
} = cartSlice.actions;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

// 성능 이슈 있으면 나중에 'reselect' 라이브러리 사용
export const getCart = state => state.cart.cart
export default cartSlice.reducer;


export const getCurrentQuantityById = id => state => state.cart.cart
  .find(item => item.pizzaId === id)?.quantity ?? 0;
