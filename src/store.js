import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./services/userSlice.js";

const store = configureStore({
  reducer: {
    customer: userSlice,
  },
});
export default store;
