"use strict";
exports.__esModule = true;
exports.postAPI = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.postAPI = react_1.createApi({
    reducerPath: "postAPI",
    baseQuery: react_1.fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: function (build) { return ({
        fetchAllPosts: build.query({
            query: function (limit) {
                if (limit === void 0) { limit = 10; }
                return ({
                    url: "/posts",
                    params: {
                        _limit: limit
                    }
                });
            }
        })
    }); }
});
