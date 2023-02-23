"use strict";
exports.__esModule = true;
exports.fundIndicatorsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.fundIndicatorsAPI = react_1.createApi({
    reducerPath: "fundIndicatorsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getFundIndicators: build.query({
            query: function () { return ({
                url: "fundIndicators"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
