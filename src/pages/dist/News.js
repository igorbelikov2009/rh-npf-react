"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopBlock_1 = require("../components/general/TopBlock");
var newsTop_jpg_1 = require("../assets/images/news/newsTop.jpg");
var ListNews_1 = require("../components/news/ListNews/ListNews");
// import GoodsData from "../components/mainPage/examples/GoodsData/GoodsData";
// import ExampleDate from "../components/mainPage/examples/ExampleDate/ExampleDate"; // не удаляй
var NewsData_1 = require("../components/mainPage/examples/NewsData/NewsData");
var News = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TopBlock_1["default"], { heading: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", image: newsTop_jpg_1["default"] }),
        react_1["default"].createElement(ListNews_1["default"], null),
        react_1["default"].createElement(NewsData_1["default"], null)));
};
exports["default"] = News;
