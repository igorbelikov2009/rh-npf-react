"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = void 0;
var GoodsAPI_1 = require("./../services/GoodsAPI");
var toolkit_1 = require("@reduxjs/toolkit");
var newsReducer_1 = require("./reducers/newsReducer");
var aboutFundAPI_1 = require("../services/aboutFundAPI");
var aboutFundCardsAPI_1 = require("../services/aboutFundCardsAPI");
var investmentCardsAPI_1 = require("../services/investmentCardsAPI");
var investmentOptionsAPI_1 = require("../services/investmentOptionsAPI");
var investmentTablesAPI_1 = require("../services/investmentTablesAPI");
var investPercentsAPI_1 = require("../services/investPercentsAPI");
// Создаём корневой редюсер, состоящий из комбинации всех редюсеров
var rootReducer = toolkit_1.combineReducers((_a = {
        newsReducer: newsReducer_1["default"]
    },
    _a[GoodsAPI_1.goodsAPI.reducerPath] = GoodsAPI_1.goodsAPI.reducer,
    _a[aboutFundAPI_1.aboutFundAPI.reducerPath] = aboutFundAPI_1.aboutFundAPI.reducer,
    _a[aboutFundCardsAPI_1.aboutFundCardsAPI.reducerPath] = aboutFundCardsAPI_1.aboutFundCardsAPI.reducer,
    _a[investmentCardsAPI_1.investmentCardsApi.reducerPath] = investmentCardsAPI_1.investmentCardsApi.reducer,
    _a[investmentOptionsAPI_1.investmentOptionsAPI.reducerPath] = investmentOptionsAPI_1.investmentOptionsAPI.reducer,
    _a[investmentTablesAPI_1.investmentTablesAPI.reducerPath] = investmentTablesAPI_1.investmentTablesAPI.reducer,
    _a[investPercentsAPI_1.investPercentsAPI.reducerPath] = investPercentsAPI_1.investPercentsAPI.reducer,
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
            return getDefaultMiddleware()
                .concat(GoodsAPI_1.goodsAPI.middleware) // потом удалить
                .concat(aboutFundAPI_1.aboutFundAPI.middleware)
                .concat(aboutFundCardsAPI_1.aboutFundCardsAPI.middleware)
                .concat(investmentCardsAPI_1.investmentCardsApi.middleware)
                .concat(investmentOptionsAPI_1.investmentOptionsAPI.middleware)
                .concat(investmentTablesAPI_1.investmentTablesAPI.middleware)
                .concat(investPercentsAPI_1.investPercentsAPI.middleware);
        }
    });
};
