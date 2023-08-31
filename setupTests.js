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

/* 
The setupTest.js file is where you can include your test configurations 
Setup Tests file is a global setup file in a create-react-app project and this file will be automatically executed before Jest runs a test
 That is the reason toBeInTheDocument( ) is available for us in our test file. 

I used it for Global Setup and Teardown: If you need to perform some setup or cleanup tasks before or after your tests run, 
you can use the beforeAll(), afterAll(), beforeEach(), and afterEach() functions from testing frameworks like Jest.
  These functions can be defined in the setupTests.js file to apply globally to all your tests.

If we run the test as it is above, we will get an error because we have not informed our tests to use MSW. 
If we don't tell our tests to use MSW, they will call the actual API endpoint. So, to inform your tests to use MSW, you will need:  
to Modify the src/setupTests.js tests setup file. To do that, open your setupTests.js and past this code 
*/
