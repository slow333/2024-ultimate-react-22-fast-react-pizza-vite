import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./services/userSlice.js";
import cartSlice from "./services/cartSlice.js";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    orderInfo: cartSlice,
  },
});
export default store;
