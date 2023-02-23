import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IPercent } from "../models/types";

export const investPercentsAPI = createApi({
  reducerPath: "investPercentsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getInvestPercents: build.query<IPercent[], void>({
      query: () => ({
        url: "investPercents",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
