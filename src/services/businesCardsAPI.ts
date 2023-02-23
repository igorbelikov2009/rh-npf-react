import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBusinessCard } from "../models/types";

export const businessCardsAPI = createApi({
  reducerPath: "businessCardsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getBusinessCards: build.query<IBusinessCard[], void>({
      query: () => ({
        url: "businesCards",
      }),
    }),
  }),
});

// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
