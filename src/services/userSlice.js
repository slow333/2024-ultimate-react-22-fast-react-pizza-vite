import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  userName: "",
  createdAt: "",
  userId: "",
};
const userSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createUser: {
      prepare(userName) {
        return {
          payload: {
            userName,
            createdAt: new Date().toLocaleDateString(),
            userId: uuid(),
          },
        };
      },
      reducer(state, action) {
        state.userName = action.payload.userName;
        state.createdAt = action.payload.createdAt;
        state.userId = action.payload.userId;
      },
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
