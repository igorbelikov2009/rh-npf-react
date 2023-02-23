"use strict";
exports.__esModule = true;
exports.reportingsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
//
exports.reportingsAPI = react_1.createApi({
    reducerPath: "reportingsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        getReportings: build.query({
            query: function () { return ({
                url: "reportings"
            }); }
        })
    }); }
});
// Нам необходимо зарегистрировать редюсер в store.ts
// и, там же, добавить мидлвеер
