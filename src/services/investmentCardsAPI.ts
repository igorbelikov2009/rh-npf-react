import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICard } from "../models/types";

export const investmentCardsApi = createApi({
  reducerPath: "investmentCardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getInvestmentCards: build.query<ICard[], void>({
      query: () => ({
        url: "investmentCards",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
