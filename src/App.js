import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, CoinsPagination, CryptoGrid, CryptoList } from "./components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useGetCryptosQuery } from "./features/services/cryptoApi";
import { useAppSelector } from "./app/hooks";

const pageSize = 8;

const App = () => {
  const { page } = useAppSelector((state) => state.page);

  const {
    data: cryptosList,
    isLoading,
    isError,
    error,
  } = useGetCryptosQuery({
    page: page,
    limit: pageSize,
  });

  if (isLoading) return <LinearProgress />;
  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar cryptosList={cryptosList} />
      <Routes>
        <Route path="/" element={<CryptoGrid cryptosList={cryptosList} />} />
        <Route
          path="/grid"
          element={<CryptoGrid cryptosList={cryptosList} />}
        />
        <Route
          path="/list"
          element={<CryptoList cryptosList={cryptosList} />}
        />
      </Routes>
      <CoinsPagination cryptosList={cryptosList} pageSize={pageSize} />
    </>
  );
};

export default App;
