import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./services/userSlice.js";
import orderSlice from "./services/orderSlice.js";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    orderInfo: orderSlice,
  },
});
export default store;
