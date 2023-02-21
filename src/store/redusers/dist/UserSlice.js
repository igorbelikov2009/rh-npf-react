"use strict";
exports.__esModule = true;
exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    users: [],
    isLoading: false,
    error: ""
};
exports.userSlice = toolkit_1.createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        userFetching: function (state) {
            state.isLoading = true;
        },
        userFetchingSuccess: function (state, action) {
            state.users = action.payload;
            state.isLoading = false;
            state.error = "";
        },
        userFetchingError: function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
exports["default"] = exports.userSlice.reducer;
// передаём userReducer в store/store.ts в корневой редюсер
// Slice создаёт для нас экшен-креатеры
