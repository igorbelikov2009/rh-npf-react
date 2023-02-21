"use strict";
exports.__esModule = true;
exports.setupStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var NewsSlice_1 = require("./redusers/NewsSlice");
var UserSlice_1 = require("./redusers/UserSlice");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers({
    newsReducer: NewsSlice_1["default"],
    userReducer: UserSlice_1["default"]
});
// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: rootReducer
    });
};
