import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IOptionItem } from "../models/types";

export const investmentOptionsAPI = createApi({
  reducerPath: "investmentOptionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getInvestmentOptions: build.query<IOptionItem[], void>({
      query: () => ({
        url: "investmentOptions",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
