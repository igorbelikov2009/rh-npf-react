"use strict";
exports.__esModule = true;
exports.newsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    news: [],
    isLoading: false,
    error: ""
};
exports.newsSlice = toolkit_1.createSlice({
    name: "news",
    initialState: initialState,
    reducers: {}
});
exports["default"] = exports.newsSlice.reducer;
// передаём newsReducer в store/store.ts в корневой редюсер
