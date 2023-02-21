"use strict";
exports.__esModule = true;
exports.userAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.userAPI = react_1.createApi({
    reducerPath: "userAPI",
    baseQuery: react_1.fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: function (build) { return ({
        fetchAllUsers: build.query({
            query: function () { return ({
                url: "/users"
            }); }
        })
    }); }
});
