import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../models/types";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    fetchAllNews: build.query<INews[], number>({
      query: (limit: number = 100) => ({
        url: "/news",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

//  регистрируем в store/store.ts
