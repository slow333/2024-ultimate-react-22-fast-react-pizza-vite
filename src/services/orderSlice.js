// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//   customer: "",
//   createdAt: '',
//   status: "",
//   priority: false,
//   cart: [],
//   id: '',
//   estimatedDelivery: '',
//   priorityPrice: '',
//   phone: '',
//   address: '',
// };
// const orderSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addCart: {
//       prepare({pizzaId, name, quantity, unitPrice, ingredients}) {
//         return {
//           payload: {
//             pizzaId, name, quantity, unitPrice,
//             totalPrice: quantity * unitPrice,
//             ingredients
//           }
//         }
//       },
//       reducer(state, action) {
//         state.cart = [...state.cart, {
//           pizzaId: action.payload.pizzaId,
//           name: action.payload.name,
//           quantity: action.payload.quantity,
//           unitPrice: action.payload.unitPrice,
//           totalPrice: state.priority ? action.payload.totalPrice * 1.1 : action.payload.totalPrice,
//           ingredients: action.payload.ingredients,
//         }];
//       }
//     },
//     addCustomer: (state, action) => {
//       state.customer = action.payload;
//     },
//     addPhone(state, action) {
//       state.phone = action.payload
//     },
//     addAddress(state, action) {
//       state.address = action.payload
//     },
//     incQuantity(state, action) {
//       state.cart = state.cart.map(pizza => {
//         return pizza.pizzaId === action.payload ? {...pizza, quantity: pizza.quantity + 1} : pizza;
//       })
//     },
//     decQuantity(state, action) {
//       if (state.quantity === 0) return;
//       state.cart = state.cart.map(pizza => {
//         return pizza.pizzaId === action.payload ? {...pizza, quantity: pizza.quantity - 1} : pizza;
//       })
//     },
//     setQuantity: {
//       prepare(pizzaId, selectedQty) {
//         return {
//           payload: {pizzaId, selectedQty}
//         }
//       },
//       reducer(state, action) {
//         state.cart = state.cart.map(pizza => {
//           return pizza.quantity === 0
//             ? null
//             : pizza.pizzaId === action.payload.pizzaId
//               ? {
//                 ...pizza,
//                 quantity: action.payload.selectedQty,
//                 totalPrice: action.payload.selectedQty * pizza.unitPrice
//               }
//               : pizza;
//           /*        if(state.cart.length === 0 ) {
//                     state.cart = state.cart.filter(c => c.pizzaId !== action.payload.pizzaId)
//                   }
//                   else {
//                     state.cart = state.cart.map(pizza => {
//                       pizza.pizzaId === action.payload.pizzaId
//                         ? { ...pizza,
//                           quantity: action.payload.selectedQty,
//                           totalPrice: action.payload.selectedQty * pizza.unitPrice
//                         }
//                         : pizza;
//                     }
//                   )}*/
//         })
//       },
//     },
//   }}
// );
//
// export const {addCustomer, addCart, addPhone, addAddress,
//   incQuantity, decQuantity,setQuantity} = orderSlice.actions;
// export default orderSlice.reducer;
