import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IReport } from "../models/types";

//
export const reportingsAPI = createApi({
  reducerPath: "reportingsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getReportings: build.query<IReport[][], void>({
      query: () => ({
        url: "reportings",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
