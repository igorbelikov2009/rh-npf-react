"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../../general/DarkIcon/DarkIcon");
var StatisticsCard_module_scss_1 = require("./StatisticsCard.module.scss");
var StatisticsCard = function (_a) {
    var icon = _a.icon, title = _a.title, span = _a.span, subtitle = _a.subtitle;
    return (react_1["default"].createElement("div", { className: StatisticsCard_module_scss_1["default"]["statistics-card"] },
        react_1["default"].createElement("div", { className: StatisticsCard_module_scss_1["default"]["statistics-card__icon"] },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: StatisticsCard_module_scss_1["default"]["statistics-card__title"] },
                title,
                " ",
                react_1["default"].createElement("span", { className: StatisticsCard_module_scss_1["default"]["statistics-card__span"] },
                    " ",
                    span,
                    " ")),
            react_1["default"].createElement("p", { className: StatisticsCard_module_scss_1["default"]["statistics-card__subtitle"] }, subtitle))));
};
exports["default"] = StatisticsCard;
