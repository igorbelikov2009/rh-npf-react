"use strict";
exports.__esModule = true;
exports.userSlice = void 0;
// import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    users: [],
    isLoading: false,
    error: ""
};
exports.userSlice = toolkit_1.createSlice({
    name: "users",
    initialState: initialState,
    reducers: {}
});
exports["default"] = exports.userSlice.reducer;
// передаём userReducer в store/store.ts в корневой редюсер
