"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsItem_module_scss_1 = require("./NewsItem.module.scss");
var NewsItem = function (_a) {
    var id = _a.id, title = _a.title, date = _a.date, paragraphs = _a.paragraphs;
    return (react_1["default"].createElement("div", { className: NewsItem_module_scss_1["default"]["news-item"] },
        react_1["default"].createElement("h3", { className: NewsItem_module_scss_1["default"]["news-item__id-date"] },
            "id: ",
            id,
            " "),
        react_1["default"].createElement("p", { className: NewsItem_module_scss_1["default"]["news-item__heading"] },
            " ",
            title,
            " "),
        react_1["default"].createElement("p", { className: NewsItem_module_scss_1["default"]["news-item__id-date"] },
            " ",
            date,
            " "),
        paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: NewsItem_module_scss_1["default"]["news-item__paragraph"] }, paragraph)); })));
};
exports["default"] = NewsItem;
