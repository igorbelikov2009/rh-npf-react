"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InfoDisclosurePageData_1 = require("../../../../data/InfoDisclosurePageData");
var RadioPrimary_1 = require("../../../ui/radios/RadioPrimary/RadioPrimary");
var SpecDepositoryBlock_1 = require("../SpecDepositoryBlock/SpecDepositoryBlock");
var SpecDepository_module_scss_1 = require("./SpecDepository.module.scss");
var SpecDepository = function () {
    var _a = react_1.useState(true), isVisible = _a[0], setVisible = _a[1];
    var currentValue = react_1.useState("0")[0];
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
                    react_1["default"].createElement(RadioPrimary_1["default"], { optionsItems: InfoDisclosurePageData_1.optionsItemsSpecDepository, currentValue: currentValue, emitValue: onClickRadioPrimary })),
                react_1["default"].createElement("div", null, isVisible ? (react_1["default"].createElement(SpecDepositoryBlock_1["default"], { subheading: InfoDisclosurePageData_1.depository1.subheading, title: InfoDisclosurePageData_1.depository1.title, subtitle: InfoDisclosurePageData_1.depository1.subtitle })) : (react_1["default"].createElement(SpecDepositoryBlock_1["default"], { subheading: InfoDisclosurePageData_1.depository2.subheading, title: InfoDisclosurePageData_1.depository2.title, subtitle: InfoDisclosurePageData_1.depository2.subtitle }))))),
        react_1["default"].createElement("section", { className: SpecDepository_module_scss_1["default"]["spec-depository__interactions"] },
            react_1["default"].createElement("div", { className: SpecDepository_module_scss_1["default"]["spec-depository__container"] },
                react_1["default"].createElement("p", { className: SpecDepository_module_scss_1["default"]["spec-depository__description"] }, "\u0414\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0410\u041E \u041D\u041F\u0424 \u00AB\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 \u043F\u0435\u043D\u0441\u0438\u0438\u00BB, \u044F\u0432\u043B\u044F\u044F\u0441\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043E\u0431\u043C\u0435\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430 \u0410\u041E \u0412\u0422\u0411 \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430\u0440\u0438\u0439.")))));
};
exports["default"] = SpecDepository;
