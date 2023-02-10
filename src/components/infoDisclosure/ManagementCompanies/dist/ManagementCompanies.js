"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioPrimary_1 = require("../../ui/radios/RadioPrimary/RadioPrimary");
var ManagementCompanies_module_scss_1 = require("./ManagementCompanies.module.scss");
var ManagementCompanies = function () {
    var _a = react_1.useState(true), isVisible = _a[0], setVisible = _a[1];
    var currentValue = react_1.useState("0")[0];
    var radioItems = [
        {
            name: "information",
            value: "0",
            title: "Действующие"
        },
        {
            name: "information",
            value: "1",
            title: "Договоры прекращены"
        },
    ];
    var onClickRadioPrimary = function (value) {
        onChangeVisiblity();
    };
    var onChangeVisiblity = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("section", { className: ManagementCompanies_module_scss_1["default"]["management-companies"] },
        react_1["default"].createElement("div", { className: ManagementCompanies_module_scss_1["default"]["management-companies__container"] },
            react_1["default"].createElement("h2", { className: ManagementCompanies_module_scss_1["default"]["management-companies__heading"] }, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
            react_1["default"].createElement("div", { className: ManagementCompanies_module_scss_1["default"]["management-companies__param-switch"] },
                react_1["default"].createElement(RadioPrimary_1["default"], { radioItems: radioItems, currentValue: currentValue, emitValue: onClickRadioPrimary })),
            react_1["default"].createElement("div", { className: ManagementCompanies_module_scss_1["default"]["management-companies__content"] }, isVisible ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-bold"] }, "\u0410\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u00AB\u0421\u0431\u0435\u0440 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0410\u043A\u0442\u0438\u0432\u0430\u043C\u0438\u00BB"),
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, \u043F\u0430\u0435\u0432\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u2116 21-000-1-00010 \u043E\u0442 12 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 1996 \u0433\u043E\u0434\u0430.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116\u0423\u041A-110/2009 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 31.07.2009 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116\u0423\u041A-117/2009 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 07.10.2009 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] },
                        react_1["default"].createElement("br", null))),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-bold"] }, "\u0410\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u00AB\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u00AB\u0422\u0420\u0410\u041D\u0421\u0424\u0418\u041D\u0413\u0420\u0423\u041F\u00BB"),
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, \u043F\u0430\u0435\u0432\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u2116 21\u2013000\u20131\u201300052 \u043E\u0442 6 \u043D\u043E\u044F\u0431\u0440\u044F 2001 \u0433\u043E\u0434\u0430.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 32/\u0414\u0423 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 17.03.2015 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] },
                        react_1["default"].createElement("br", null))),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-bold"] }, "\u0410\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u00AB\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u00AB\u0421\u041F\u0423\u0422\u041D\u0418\u041A-\u0423\u041F\u0420\u0410\u0412\u041B\u0415\u041D\u0418\u0415 \u041A\u0410\u041F\u0418\u0422\u0410\u041B\u041E\u041C\u00BB"),
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] },
                        "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, ",
                        react_1["default"].createElement("br", null),
                        "\u043F\u0430\u0435\u0432\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, ",
                        react_1["default"].createElement("br", null),
                        "\u2116 21-000-1-00054 \u043E\u0442 3 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2001 \u0433\u043E\u0434\u0430.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 250518/1, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 25.05.2018\u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 200220/1, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 20.02.2020\u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 200220/2, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 20.02.2020\u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 311220/1, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 31.12.2020\u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442.")))) : (react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-bold"] }, "\u0410\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u00AB\u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0410\u043A\u0442\u0438\u0432\u0430\u043C\u0438\u00BB (\u0434\u043E \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u043D\u043E\u044F\u0431\u0440\u0435 2012 \u0433. - \u0417\u0410\u041E \u00AB\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u00AB\u0422\u0440\u043E\u0439\u043A\u0430 \u0414\u0438\u0430\u043B\u043E\u0433\u00BB)"),
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, \u043F\u0430\u0435\u0432\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u2116 21-000-1-00010 \u043E\u0442 12 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 1996 \u0433\u043E\u0434\u0430.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116\u0423\u041A-111/2009 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 31.07.2009 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D 28.02.2013 \u0433. \u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 \u0423\u041A-51/2012 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 19.12.2012 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D 31.01.2014 \u0433. \u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116\u0423\u041A-52/2012 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 19.12.2012 \u0433., \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u044B\u0439, \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D 31.01.2014 \u0433.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] },
                        react_1["default"].createElement("br", null))),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-bold"] }, "\u041E\u041E\u041E \u00AB\u0423\u041A \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u041A\u0430\u043F\u0438\u0442\u0430\u043B\u00BB"),
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 21-000-1-00587 \u043E\u0442 15.11.2008\u0433. \u043D\u0430 \u043F\u0440\u0430\u0432\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, \u043F\u0430\u0435\u0432\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438 \u0438 \u043D\u0435\u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0444\u043E\u043D\u0434\u0430\u043C\u0438, \u0432\u044B\u0434\u0430\u043D\u043D\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u043E\u0439 \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0440\u044B\u043D\u043A\u0430\u043C, \u0441\u0440\u043E\u043A \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u0430\u044F. \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 077-09401-001000 \u043E\u0442 05.09.2006\u0433., \u043D\u0430 \u043F\u0440\u0430\u0432\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \u0446\u0435\u043D\u043D\u044B\u043C\u0438 \u0431\u0443\u043C\u0430\u0433\u0430\u043C\u0438, \u0432\u044B\u0434\u0430\u043D\u043D\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0421\u043B\u0443\u0436\u0431\u043E\u0439 \u043F\u043E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u043C \u0440\u044B\u043D\u043A\u0430\u043C, \u0441\u0440\u043E\u043A \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F: \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u0430\u044F.")),
                react_1["default"].createElement("p", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph"] },
                    react_1["default"].createElement("span", { className: ManagementCompanies_module_scss_1["default"]["management-companies__paragraph-small"] }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 294/2007, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 27.06.2007 \u0433. \u043D\u0430 \u0441\u0440\u043E\u043A 2 \u0433\u043E\u0434\u0430, \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D 31.12.2009 \u0433., \u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u2116 295/2007, \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D 27.06.2007 \u0433. \u043D\u0430 \u0441\u0440\u043E\u043A 2 \u0433\u043E\u0434\u0430, \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D 31.12.2009 \u0433."))))))));
};
exports["default"] = ManagementCompanies;
