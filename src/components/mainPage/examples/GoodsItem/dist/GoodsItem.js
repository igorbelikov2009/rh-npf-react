"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GoodsItem_module_scss_1 = require("./GoodsItem.module.scss");
var GoodsItem = function (_a) {
    var id = _a.id, title = _a.title, date = _a.date, paragraphs = _a.paragraphs;
    return (react_1["default"].createElement("div", { className: GoodsItem_module_scss_1["default"]["news-item"] },
        react_1["default"].createElement("h3", { className: GoodsItem_module_scss_1["default"]["news-item__id-date"] },
            "id: ",
            id,
            " "),
        react_1["default"].createElement("p", { className: GoodsItem_module_scss_1["default"]["news-item__heading"] },
            " ",
            title,
            " "),
        react_1["default"].createElement("p", { className: GoodsItem_module_scss_1["default"]["news-item__id-date"] },
            " ",
            date,
            " "),
        paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: GoodsItem_module_scss_1["default"]["news-item__paragraph-before"] }, paragraph)); })));
};
exports["default"] = GoodsItem;
