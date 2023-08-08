import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "../test-utils";
import { screen, waitFor } from "@testing-library/react";
import { handlers } from "../mocks/handler";
import { useGetCryptosQuery } from "../features/services/cryptoApi";
import App from "../App";

jest.mock("../features/services/cryptoApi.js", () => ({
  useGetCryptosQuery: jest.fn(),
}));

describe("App", () => {
  beforeEach(() => {
    useGetCryptosQuery.mockReset();
  });

  test("renders loading progress bar while data is being fetched", () => {
    useGetCryptosQuery.mockReturnValue({
      isLoading: true,
    });

    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders error message when isError is true", () => {
    const mockError = "Something went wrong!";
    useGetCryptosQuery.mockReturnValue({
      isLoading: false,
      isError: true,
      error: mockError,
    });
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const errorMessage = screen.getByText((content) => {
      return content.startsWith("Error:") && content.includes(mockError);
    });
    expect(errorMessage).toBeInTheDocument();
  });
});

test("renders Navbar, either CryptoGrid or CryptoList, and CoinsPagination when data is loaded", async () => {
  const mockData = {
    data: {
      handlers,
    },
    isLoading: false,
    isError: false,
    error: null,
  };
  useGetCryptosQuery.mockReturnValueOnce(mockData);
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(/Junior FrontEnd Dev Test/i)).toBeInTheDocument();

  const cryptoGrid = screen.getAllByTestId("crypto-grid");
  expect(cryptoGrid).toHaveLength(1); // exactly 1 with the data-testid attribute set to "crypto-grid" is present in the rendered output.

  const cryptoList = screen.queryByTestId("crypto-list");
  expect(cryptoList).toBeNull();

  const coinspagination = screen.getByRole("navigation", {
    name: "pagination navigation",
  });
  expect(coinspagination).toBeInTheDocument();

  await waitFor(() => {
    const loadingProgressBar = screen.queryByRole("progressbar");
    expect(loadingProgressBar).toBeNull();
  });
});
