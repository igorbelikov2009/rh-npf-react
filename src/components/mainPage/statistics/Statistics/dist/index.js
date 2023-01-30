"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StatisticsCard_1 = require("../StatisticsCard");
var index_module_scss_1 = require("./index.module.scss");
var Statistics = function () {
    var cards = [
        {
            icon: "Calendar",
            title: "17 лет",
            span: "на рынке",
            subtitle: 'Фонд "Ренессанс пенсии" основан в 2002 году'
        },
        {
            icon: "High Rate",
            title: "Высокий ",
            span: "рейтинг",
            subtitle: "Надежность ruАА- по оценке Эксперт РА"
        },
        {
            icon: "Users",
            title: "41 000",
            span: "человек",
            subtitle: " участники пенсионной программы"
        },
        {
            icon: "Partner",
            title: "150",
            span: "компаний",
            subtitle: "заботятся о пенсиях сотрудников"
        },
        {
            icon: "Bank",
            title: "17 млрд",
            span: "рублей",
            subtitle: "пенсионных резервов в Фонде"
        },
    ];
    return (react_1["default"].createElement("section", { className: index_module_scss_1["default"]["statistics"] },
        react_1["default"].createElement("div", { className: index_module_scss_1["default"]["statistics__container"] },
            react_1["default"].createElement("h2", { className: index_module_scss_1["default"]["statistics__heading"] }, "\u0424\u043E\u043D\u0434 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445"),
            react_1["default"].createElement("div", { className: index_module_scss_1["default"]["statistics__block"] }, cards.map(function (card) { return (react_1["default"].createElement(StatisticsCard_1["default"], { key: card.icon, icon: card.icon, span: card.span, title: card.title, subtitle: card.subtitle })); })))));
};
exports["default"] = Statistics;
