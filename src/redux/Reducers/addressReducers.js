




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressList: [],
};

const addressListingSlice = createSlice({
  name: "addressListing",
  initialState,
  reducers: {
    addAdress: (state, action) => {
      state.addressList.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.addressList = state.addressList.filter(
        (Address) => Address.id !== action.payload
      );
    },
    removeAllAddresses: (state) => {
      state.addressList = [];
    },
    
  },
});

export const { addAdress, removeAddress, removeAllAddresses } = addressListingSlice.actions;

export default addressListingSlice.reducer;
