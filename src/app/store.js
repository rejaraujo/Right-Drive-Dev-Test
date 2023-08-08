import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../features/services/cryptoApi";
import rootReducer from "../reducer";

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(cryptoApi.middleware),
    preloadedState,
  });
}
