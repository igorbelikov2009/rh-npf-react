"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InvestmentRulesCard_1 = require("../InvestmentRulesCard/InvestmentRulesCard");
var InvestmentRules_module_scss_1 = require("./InvestmentRules.module.scss");
var InvestmentRules = function () {
    var cards = [
        { icon: "Money", title: "Сохранение и приумножение средств вкладчиков и участников" },
        { icon: "Separation", title: "Диверсификация активов" },
        { icon: "Magnifier", title: "Четкий контроль и прозрачность всех операций" },
        {
            icon: "Book",
            title: "Соответствие Российским законодательным требованиям и лучшим мировым практикам"
        },
        {
            icon: "Partner",
            title: "Независимость в выборе партнеров – на основе открытых тендеров"
        },
    ];
    return (react_1["default"].createElement("div", { className: InvestmentRules_module_scss_1["default"]["investment-rules"] },
        react_1["default"].createElement("h1", { className: InvestmentRules_module_scss_1["default"]["investment-rules__heading"] }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"),
        react_1["default"].createElement("div", { className: InvestmentRules_module_scss_1["default"]["investment-rules__cards"] }, cards.map(function (card, index) { return (react_1["default"].createElement(InvestmentRulesCard_1["default"], { key: index, icon: card.icon, title: card.title })); }))));
};
exports["default"] = InvestmentRules;
