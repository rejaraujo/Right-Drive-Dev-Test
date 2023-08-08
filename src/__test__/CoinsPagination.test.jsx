import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { CoinsPagination } from "../components";
import { setPage } from "../features/slices/pagination/pageSlice";

const mockStore = configureMockStore();

describe("CoinsPagination", () => {
  let store;
  beforeEach(() => {
    store = mockStore(); // create a new mock store before each test
  });

  afterEach(() => {
    //clean up any changes or mocks after each test
    jest.clearAllMocks();
  });

  const mockCryptosList = {
    data: {
      stats: {
        total: 27587,
      },
    },
  };

  const pageSize = 12;
  const page = 4;

  //Mock window.scrollTo method wrapping the mock in a before and after "All" to  ensure that the mock is applied only to the scope of this test suite.
  const originalScrollTo = window.scrollTo;
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  afterAll(() => {
    window.scrollTo = originalScrollTo;
  });

  test("it renders pagination with correct props", () => {
    render(
      <Provider store={store}>
        <CoinsPagination
          page={page}
          cryptosList={mockCryptosList}
          pageSize={pageSize}
        />
      </Provider>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(page.toString())).toBeInTheDocument();
  });

  test("it handles page change correctly", async () => {
    render(
      <Provider store={store}>
        <CoinsPagination
          page={page}
          cryptosList={mockCryptosList}
          pageSize={pageSize}
        />
      </Provider>
    );

    /* using user.click instead of fireEvent.click since user.click simulates a more realistic user interaction. */
    user.click(screen.getByText("2"));
    // Use waitFor to wait for the expected behavior
    await waitFor(() => {
      const actions = store.getActions(); //returns an array of all the actions that have been dispatched to the mock store
      //expect(actions).toEqual([setPage(2)]);
      expect(actions).toContainEqual(setPage(2));
    });
    // Simulate the second click
    user.click(screen.getByText("1"));
    // Use waitFor to wait for the second click action
    await waitFor(() => {
      const actions = store.getActions(); //returns an array of all the actions that have been dispatched to the mock store
      //expect(actions).toEqual([setPage(2), setPage(1)]);
      expect(actions).toContainEqual(setPage(1));
    });
    //Check if window.scrollToo was called with the correct parameters.
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});

/* fireEvent x user-event: 

a. fireEvent: it comes from RTL. It is a wrapper around the browser's low-level dispatchEvent API, which allows developers to trigger any event on any element. So, It dispatches DOM events.
The problem is that the browser usually does more than just trigger one event for one interaction.

b. user-event: it is a companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
It comes from user-event library, and gets installed by default when you scaffolds your app using create-react-app. The user-event simulates full interactions, which may fire
multiple events and do additional checks along the way.

user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and interactability checks along the way and manipulates the DOM just like a user 
interaction in the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box.
This is why you should use user-event to test interaction with your components. There are, however, some user interactions or aspects of these that aren't yet implemented 
and thus can't yet be described with user-event. In these cases you can use fireEvent to dispatch the concrete events that your software relies on.

*/
