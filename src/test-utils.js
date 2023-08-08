import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
