"use strict";
exports.__esModule = true;
exports.aboutFundColumnsAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.aboutFundColumnsAPI = react_1.createApi({
    reducerPath: "aboutFundColumnsAPI",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    endpoints: function (build) { return ({
        fetchAboutFundColumns: build.query({
            query: function () { return ({
                url: "/aboutFundColumns"
            }); }
        })
    }); }
});
//  регистрируем в store/store.ts
exports["default"] = exports.aboutFundColumnsAPI.reducer;
