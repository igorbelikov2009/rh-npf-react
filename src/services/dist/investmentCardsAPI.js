"use strict";
exports.__esModule = true;
exports.investmentCardsApi = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.investmentCardsApi = react_1.createApi({
    reducerPath: "investmentCardsApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getInvestmentCards: build.query({
            query: function () { return ({
                url: "investmentCards"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
