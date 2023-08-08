import { combineReducers } from "@reduxjs/toolkit";
import { cryptoApi } from "./features/services/cryptoApi";
import pageSlice from "./features/slices/pagination/pageSlice";
import viewReducer from "./features/slices/switchView/viewSlice";

const rootReducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  view: viewReducer,
  page: pageSlice,
});

export default rootReducer;
