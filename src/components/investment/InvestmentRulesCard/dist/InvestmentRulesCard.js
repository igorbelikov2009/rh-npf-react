"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var InvestmentRulesCard_module_scss_1 = require("./InvestmentRulesCard.module.scss");
var InvestmentRulesCard = function (_a) {
    var icon = _a.icon, title = _a.title;
    return (react_1["default"].createElement("div", { className: InvestmentRulesCard_module_scss_1["default"]["investment-card"] },
        react_1["default"].createElement("div", { className: InvestmentRulesCard_module_scss_1["default"]["investment-card__icon"] },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: InvestmentRulesCard_module_scss_1["default"]["investment-card__title"] }, title))));
};
exports["default"] = InvestmentRulesCard;
