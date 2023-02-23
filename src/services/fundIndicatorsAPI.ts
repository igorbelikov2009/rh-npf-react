import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IIndicatorsYear } from "../models/types";

export const fundIndicatorsAPI = createApi({
  reducerPath: "fundIndicatorsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getFundIndicators: build.query<IIndicatorsYear[], void>({
      query: () => ({
        url: "fundIndicators",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
