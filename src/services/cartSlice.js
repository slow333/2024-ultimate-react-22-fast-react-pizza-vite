import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  customer: "",
  createdAt: '',
  status: "",
  priority: false,
  cart: [],
  id: '',
  estimatedDelivery: '',
  priorityPrice: '',
  phone: '',
  address: '',
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: {
      prepare({pizzaId, name, quantity, unitPrice, totalPrice, ingredients}) {
        return {
          payload: {
            pizzaId, name, quantity, unitPrice,
            totalPrice: quantity * unitPrice,
            ingredients
          }
        }
      },
      reducer(state, action) {
        state.cart = [...state.cart, {
          pizzaId: action.payload.pizzaId,
          name: action.payload.name,
          quantity: action.payload.quantity,
          unitPrice: action.payload.unitPrice,
          totalPrice: state.priority ? action.payload.totalPrice * 1.1 : action.payload.totalPrice,
          ingredients: action.payload.ingredients,
        }];
      }
    },
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
    addPhone(state, action) {
      state.phone = action.payload
    },
    addAddress(state, action) {
      state.address = action.payload
    }
  },
},);

export const {addCustomer, addCart, addPhone, addAddress} = cartSlice.actions;
export default cartSlice.reducer;
