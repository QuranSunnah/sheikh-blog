import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./feature/loaderSlice";

const combineReducer = combineReducers({
  loader: loaderSlice,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
