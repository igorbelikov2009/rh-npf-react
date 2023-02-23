"use strict";
exports.__esModule = true;
exports.investmentOptionsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.investmentOptionsAPI = react_1.createApi({
    reducerPath: "investmentOptionsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getInvestmentOptions: build.query({
            query: function () { return ({
                url: "investmentOptions"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
