import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoader: (state) => {
      state.isLoading = true;
    },

    closeLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export default loaderSlice.reducer;
export const { startLoader, closeLoader } = loaderSlice.actions;
