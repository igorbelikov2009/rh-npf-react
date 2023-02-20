"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserDate_1 = require("../../../api/UserDate/UserDate");
var Article_module_scss_1 = require("./Article.module.scss");
var Article = function (_a) {
    var link = _a.link;
    var formattedDate = UserDate_1["default"].format(new Date(link.date));
    return (react_1["default"].createElement("div", { className: Article_module_scss_1["default"]["news"] },
        react_1["default"].createElement("div", { className: Article_module_scss_1["default"]["news__header"] },
            react_1["default"].createElement("h1", { className: Article_module_scss_1["default"]["news__header-heading"] },
                " ",
                link.title,
                " "),
            react_1["default"].createElement("p", { className: Article_module_scss_1["default"]["news__header-date"] },
                " ",
                formattedDate,
                " "),
            link.paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: Article_module_scss_1["default"]["news__paragraph"] }, paragraph)); }))));
};
exports["default"] = Article;
