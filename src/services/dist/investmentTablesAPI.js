"use strict";
exports.__esModule = true;
exports.investmentTablesAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.investmentTablesAPI = react_1.createApi({
    reducerPath: "investmentTablesAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getInvestmentTables: build.query({
            query: function () { return ({
                url: "investmentTables"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
