"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioPrimary_1 = require("../../../ui/radios/RadioPrimary/RadioPrimary");
var SpecDepositoryBlock_1 = require("../SpecDepositoryBlock/SpecDepositoryBlock");
var SpecDepository_module_scss_1 = require("./SpecDepository.module.scss");
var SpecDepository = function () {
    var _a = react_1.useState(true), isVisible = _a[0], setVisible = _a[1];
    var _b = react_1.useState("0"), currentValue = _b[0], setCurrentValue = _b[1];
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
    var depository1 = {
        subheading: "АО ВТБ Специализированный депозитарий",
        title: "лицензия на осуществление деятельности в качестве специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов №22-000-1-00005 от 25 ноября 1997 года (бессрочная).",
        subtitle: "Договор №96 заключен 27.09.2010 г., бессрочный, действует"
    };
    var depository2 = {
        subheading: "ООО «Дойче Банк»",
        title: "лицензия № 22-000-1-00060 от 25.01.2005г., на осуществление деятельности специализированного депозитария инвестиционных фондов, паевых инвестиционных фондов и негосударственных пенсионных фондов, выданную Федеральной Службой по финансовым рынкам, срок окончания: лицензия предоставлена на срок 5 лет.",
        subtitle: "Договор №16-1/NPF/789 от 28.11.2008 г., на срок один год, прекращен 26.09.2010 г."
    };
    var onClickRadioPrimary = function (value) {
        onChangeVisiblity();
    };
    var onChangeVisiblity = function () {
        setVisible(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("section", { className: SpecDepository_module_scss_1["default"]["spec-depository"] },
            react_1["default"].createElement("div", { className: SpecDepository_module_scss_1["default"]["spec-depository__container"] },
                react_1["default"].createElement("h2", { className: SpecDepository_module_scss_1["default"]["spec-depository__heading"] }, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430\u0440\u0438\u0439"),
                react_1["default"].createElement("div", { className: SpecDepository_module_scss_1["default"]["spec-depository__param-switch"] },
                    react_1["default"].createElement(RadioPrimary_1["default"], { radioItems: radioItems, currentValue: currentValue, emitValue: onClickRadioPrimary })),
                react_1["default"].createElement("div", null, isVisible ? (react_1["default"].createElement(SpecDepositoryBlock_1["default"], { "v-if": "isVisible", subheading: depository1.subheading, title: depository1.title, subtitle: depository1.subtitle })) : (react_1["default"].createElement(SpecDepositoryBlock_1["default"], { "v-if": "!isVisible", subheading: depository2.subheading, title: depository2.title, subtitle: depository2.subtitle }))))),
        react_1["default"].createElement("section", { className: SpecDepository_module_scss_1["default"]["spec-depository__interactions"] },
            react_1["default"].createElement("div", { className: SpecDepository_module_scss_1["default"]["spec-depository__container"] },
                react_1["default"].createElement("p", { className: SpecDepository_module_scss_1["default"]["spec-depository__description"] },
                    "\u0414\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB, \u044F\u0432\u043B\u044F\u044F\u0441\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430",
                    react_1["default"].createElement("a", { className: SpecDepository_module_scss_1["default"]["spec-depository__link"], href: "#" }, "\u0410\u041E \u0412\u0422\u0411 \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430\u0440\u0438\u0439."))))));
};
exports["default"] = SpecDepository;
