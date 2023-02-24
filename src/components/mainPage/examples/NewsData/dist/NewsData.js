"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_1 = require("../../../../hooks/redux");
var newsReducer_1 = require("../../../../store/reducers/newsReducer");
var NewsItem_1 = require("../NewsItem/NewsItem");
var NewsData_module_scss_1 = require("./NewsData.module.scss");
var NewsData = function () {
    var dispatch = redux_1.useAppDispanch();
    var _a = redux_1.useAppSelector(function (state) { return state.newsReducer; }), respon = _a.respon, isLoading = _a.isLoading, error = _a.error;
    var news = respon.formatedDateNews;
    react_1.useEffect(function () {
        dispatch(newsReducer_1.getFormatedNews());
    }, [dispatch]);
    return (react_1["default"].createElement("div", { className: NewsData_module_scss_1["default"]["block"] },
        react_1["default"].createElement("div", { className: NewsData_module_scss_1["default"]["block__head"] },
            isLoading && react_1["default"].createElement("h1", null, "Loading..."),
            error && (react_1["default"].createElement("h1", null,
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    " ",
                    error,
                    " "))),
            react_1["default"].createElement("h1", { className: NewsData_module_scss_1["default"]["block__heading"] }, " NewsData "),
            react_1["default"].createElement("div", null, news &&
                news.map(function (item) { return (react_1["default"].createElement(NewsItem_1["default"], { key: item.id, id: item.id, title: item.title, date: item.date, paragraphs: item.paragraphs })); })))));
};
exports["default"] = NewsData;
