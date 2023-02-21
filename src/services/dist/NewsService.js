"use strict";
exports.__esModule = true;
exports.newsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.newsAPI = react_1.createApi({
    reducerPath: "newsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        fetchAllNews: build.query({
            query: function (limit) {
                if (limit === void 0) { limit = 100; }
                return ({
                    url: "/news",
                    params: {
                        _limit: limit
                    }
                });
            }
        })
    }); }
});
//  регистрируем в store/store.ts
