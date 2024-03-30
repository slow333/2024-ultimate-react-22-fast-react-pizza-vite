// noinspection DuplicatedCode

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAddress} from "../../services/apiGeocoding.js";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
}

// redux는 기본적으로 synchronize 해서 비동기를 사용하기 위해서는 thunk를 사용해야 함.
export const fetchAddress = createAsyncThunk(`user/fetchAddress`,
  // 4개의 상태를 갖음 : pending, fulfilled, idle, rejected
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude
    }
    const addressObj = await getAddress(position);

    const address = `${addressObj?.city}, ${addressObj.locality}, ${addressObj.countryName} ${addressObj.postcode}`;

    // payload of fulfilled state 주는 값...
    return {position, address}
  })

const initialState = {
  userName: "",

  status: 'idle',
  position: {},
  address: '',
  error: '',

  createdAt: "",
  phone: '',
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
    updateName(state, action) {
      state.userName = action.payload;
    },
    updatePhone(state, action) {
      state.phone = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchAddress.pending,(state, action) =>  {
      state.status = 'loading'
    }).addCase(fetchAddress.fulfilled, (state,action) =>{
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.status = 'idle';
    }).addCase(fetchAddress.rejected, (state, action) => {
      state.status = 'error';
      state.error = "주소를 가지고 오는데 문제가 있습니다. 주소를 넣어주세요";
      // state.error = action.error.message;
    })
});

export const {updatePhone, updateName, updateAddress} = userSlice.actions;
export default userSlice.reducer;

export const getUsername = state => state.user.userName;