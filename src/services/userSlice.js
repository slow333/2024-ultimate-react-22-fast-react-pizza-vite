import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
  userName: '', createdAt: '', userId: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: {
      prepare(userName) {
        return {
          payload: { userName,
            createdAt: new Date().toLocaleDateString(),
            userId : uuid() }
        }
      },
      reducer(state, action) {
        state.userName = action.payload.userName;
        state.createdAt = action.payload.createdAt;
        state.userId = action.payload.userId;
      }
    },
    getUser: (state) => {
      return state.userName;
    }
  }
})

export const {createUser, getUser} = userSlice.actions;
export default userSlice.reducer;