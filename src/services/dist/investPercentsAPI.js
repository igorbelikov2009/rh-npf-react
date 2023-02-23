"use strict";
exports.__esModule = true;
exports.investPercentsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
var react_2 = require("@reduxjs/toolkit/dist/query/react");
exports.investPercentsAPI = react_2.createApi({
    reducerPath: "investPercentsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getInvestPercents: build.query({
            query: function () { return ({
                url: "investPercents"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
