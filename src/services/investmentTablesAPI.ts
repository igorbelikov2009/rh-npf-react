import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IExpandingTable } from "../models/types";

export const investmentTablesAPI = createApi({
  reducerPath: "investmentTablesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getInvestmentTables: build.query<IExpandingTable[][], void>({
      query: () => ({
        url: "investmentTables",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
