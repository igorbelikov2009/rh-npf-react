"use strict";
exports.__esModule = true;
exports.businessCardsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.businessCardsAPI = react_1.createApi({
    reducerPath: "businessCardsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getBusinessCards: build.query({
            query: function () { return ({
                url: "businesCards"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
