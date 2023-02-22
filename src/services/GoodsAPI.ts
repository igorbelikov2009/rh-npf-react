import { IGoods } from "./../models/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const goodsAPI = createApi({
  reducerPath: "goodsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Goods"],
  endpoints: (build) => ({
    getGoods: build.query<IGoods[], number>({
      query: (limit: number = 10) => ({
        url: "/goods",
        params: {
          _limit: limit,
        },
      }),

      providesTags: (result) => ["Goods"], // указываем, что эндпоинт getGoods
      // работает с тэгом ["Goods"]
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: "goods",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Goods"], // прежние данные делаем неактуальными при помощи
      // этого тэга
      // и происходит автоматическое обновление браузера при выполнении мутации.
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `goods/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Goods"], // прежние данные делаем неактуальными при помощи
      // этого тэга и происходит автоматическое обновление браузера при выполнении мутации.
    }),
  }),
});

export const { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } = goodsAPI;

//  регистрируем в store/store.ts
