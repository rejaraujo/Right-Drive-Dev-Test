import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "cfdc60871dmsh0f9fdea16b5d43ep1a5e78jsn6076185dd0d9",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ page, limit }) =>
        createRequest(
          `/coins?limit=${limit}&offset=${(page === 0 ? 0 : page - 1) * limit}`
        ),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
