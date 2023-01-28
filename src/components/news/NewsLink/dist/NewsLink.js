"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NewsLink_module_scss_1 = require("./NewsLink.module.scss");
var NewsLink = function (_a) {
    var title = _a.title, date = _a.date, id = _a.id;
    return (react_1["default"].createElement("div", { className: NewsLink_module_scss_1["default"]["news-link"] },
        react_1["default"].createElement("p", { className: NewsLink_module_scss_1["default"]["news-link__title"] },
            " ",
            title,
            " "),
        react_1["default"].createElement("p", { className: NewsLink_module_scss_1["default"]["news-link__date"] }, date)));
};
exports["default"] = NewsLink;
