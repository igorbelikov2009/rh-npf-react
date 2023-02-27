"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var NewsItem_module_scss_1 = require("./NewsItem.module.scss");
var NewsItem = function (_a) {
    // const history = unstable_HistoryRouter();
    var id = _a.id, title = _a.title, date = _a.date, paragraphs = _a.paragraphs, handleRemove = _a.handleRemove;
    var handleHistory = function (e) {
        e.stopPropagation();
        // history.push(`/news/${id}`);
    };
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
        paragraphs.map(function (paragraph, index) { return (react_1["default"].createElement("p", { key: index, className: NewsItem_module_scss_1["default"]["news-item__paragraph-before"] }, paragraph)); }),
        react_1["default"].createElement("div", { className: NewsItem_module_scss_1["default"]["news-item__container-button"] },
            react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-success", className: "mt-2", onClick: handleHistory }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"),
            react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-danger", onClick: handleRemove }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))));
};
exports["default"] = NewsItem;
