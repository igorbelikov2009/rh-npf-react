"use strict";
exports.__esModule = true;
exports.useDeleteProductMutation = exports.useAddProductMutation = exports.useGetGoodsQuery = exports.goodsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.goodsAPI = react_1.createApi({
    reducerPath: "goodsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes: ["Goods"],
    endpoints: function (build) { return ({
        getGoods: build.query({
            query: function (limit) {
                if (limit === void 0) { limit = 10; }
                return ({
                    url: "/goods",
                    params: {
                        _limit: limit
                    }
                });
            },
            providesTags: function (result) { return ["Goods"]; }
        }),
        addProduct: build.mutation({
            query: function (body) { return ({
                url: "goods",
                method: "POST",
                body: body
            }); },
            invalidatesTags: ["Goods"]
        }),
        deleteProduct: build.mutation({
            query: function (id) { return ({
                url: "goods/" + id,
                method: "DELETE"
            }); },
            invalidatesTags: ["Goods"]
        })
    }); }
});
exports.useGetGoodsQuery = exports.goodsAPI.useGetGoodsQuery, exports.useAddProductMutation = exports.goodsAPI.useAddProductMutation, exports.useDeleteProductMutation = exports.goodsAPI.useDeleteProductMutation;
//  регистрируем в store/store.ts
