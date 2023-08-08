import React from "react";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { renderWithProviders } from "../test-utils";

// About MemoryBrowser x BrowserRouter x StaticRouter

/*  when testing React components in a browser-like environment with RTL, using BrowserRouter is considered the standard approach. 
It allows you to test navigation behavior, route rendering, and interaction with browser history, 
closely mimicking how your application would work in a real browser.

On the other hand, if you are dealing with server-side rendering or non-browser environments, StaticRouter is more suitable. 
It allows you to test components that depend on routing logic without the need for a full DOM.
*/

jest.mock("../app/hooks.js", () => ({
  useAppSelector: jest.fn(), // return the whole state object, not just the specific property I need.
  useAppDispatch: jest.fn(),
}));

//Mock the data returned by the react-redux hooks
describe("Navbar", () => {
  beforeEach(() => {
    //ensures that any changes or calls made to these mocked functions in one test do not affect the behavior of other tests.
    useAppSelector.mockReset();
    useAppDispatch.mockReset();
  });

  test("Navbar renders with correct title and icon", () => {
    useAppSelector.mockReturnValue({ view: true });

    renderWithProviders(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/Junior FrontEnd Dev Test/i)).toBeInTheDocument();
    expect(screen.getByTestId("trending-up-icon")).toBeInTheDocument();
  });

  test("Navbar renders listIcon when view is set to true", () => {
    //define the useAppSelector funcion and whenever it gets called, return tthe parameter of mockReturnValue()
    useAppSelector.mockReturnValue({ view: true });
    renderWithProviders(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const appsIcon = screen.queryByTestId("apps-icon"); //queryByTestId returns null when an element is not found,
    expect(appsIcon).toBeNull();

    const listIcon = screen.queryByTestId("list-icon");
    expect(listIcon).toBeInTheDocument();
  });

  test("Navbar renders AppsIcon when view is set to false", () => {
    //define the useAppSelector funcion and whenever it gets called, return tthe parameter of mockReturnValue()
    useAppSelector.mockReturnValue({ view: false });
    renderWithProviders(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const appsIcon = screen.queryByTestId("apps-icon");
    expect(appsIcon).toBeInTheDocument();

    const linkElement = screen.getByLabelText("Grid View");
    expect(linkElement).toBeInTheDocument();
  });
});
