import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  userName: "",
  createdAt: "",
  userId: "",
  phone:'',
  address:'',
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
/*    createUser: {
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
    },*/
    updateName(state,action) {
      state.userName = action.payload;
    },
    updatePhone(state, action) {
      state.phone = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updatePhone,  updateName, updateAddress} = userSlice.actions;
export default userSlice.reducer;

export const getUsername = state => state.user.userName;