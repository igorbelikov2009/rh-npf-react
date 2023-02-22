"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var GoodsAPI_1 = require("./../services/GoodsAPI");
var toolkit_1 = require("@reduxjs/toolkit");
var newsReducer_1 = require("./reducers/newsReducer");
var aboutFundAPI_1 = require("../services/aboutFundAPI");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers((_a = {
        newsReducer: newsReducer_1["default"]
    },
    _a[GoodsAPI_1.goodsAPI.reducerPath] = GoodsAPI_1.goodsAPI.reducer,
    _a[aboutFundAPI_1.aboutFundAPI.reducerPath] = aboutFundAPI_1.aboutFundAPI.reducer,
    _a));
// Создаём функцию setupStore, с помощью её мы будем конфигурировать
// наше редакс-хранилище. Без использования toolkit мы использовали
// createReducer. Сейчас используем configureStore().
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: rootReducer,
        // Добавляем к дефолтному мидлвееру, методом concat(), мидлвеер из нашего postAPI.
        // Затем, методом concat(), добавляем мидлвеер из нашего todoAPI
        // Затем, методом concat(), добавляем мидлвеер из нашего commentAPI
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware().concat(GoodsAPI_1.goodsAPI.middleware).concat(aboutFundAPI_1.aboutFundAPI.middleware);
        }
    });
};
