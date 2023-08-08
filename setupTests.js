import "whatwg-fetch";
import "@testing-library/jest-dom";
import { server } from "./src/mocks/server.js";
import { setupStore } from "./src/app/store.js";
import { cryptoApi } from "./src/features/services/cryptoApi.js";

const store = setupStore({});

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// This is the solution to clear RTK Query cache after each test
store.dispatch(cryptoApi.util.resetApiState());
