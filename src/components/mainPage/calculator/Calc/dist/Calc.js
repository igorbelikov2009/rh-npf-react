"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var Checkbox_1 = require("../../../ui/Checkbox/Checkbox");
var RadioSecondary_1 = require("../../../ui/radios/RadioSecondary/RadioSecondary");
var Slider_1 = require("../../../ui/Slider/Slider");
var Graph_1 = require("../Graph/Graph");
var PensionInfo_1 = require("../PensionInfo/PensionInfo");
var Calc_module_scss_1 = require("./Calc.module.scss");
var Calculator = function () {
    var _a = react_1.useState("65"), genderValue = _a[0], setGenderValue = _a[1]; // гендерный возраст выхода на пенсию
    var _b = react_1.useState(30), ageValue = _b[0], setAgeValue = _b[1]; // текущий возраст
    var _c = react_1.useState(65), ageSliderMax = _c[0], setAgeSliderMax = _c[1];
    var numberOfYears = 35; // срок инвестирования => investmentTerm
    // const firstInvestValue = ""; // первичный взнос => downPayment
    var _d = react_1.useState(1000), downPayment = _d[0], setDownPayment = _d[1]; // первичный взнос => downPayment
    // const monthInvestValue = ""; // ежемесячный взнос => monthlyInstallment
    var _e = react_1.useState(5000), monthlyInstallment = _e[0], setMonthlyInstallment = _e[1]; // ежемесячный взнос => monthlyInstallment
    // const timePaymentsValue = ""; // срок выплат пенсии => periodPaymentPension
    var _f = react_1.useState(15), periodPaymentPension = _f[0], setPeriodPaymentPension = _f[1]; // срок выплат пенсии => periodPaymentPension
    var _g = react_1.useState(true), earlyRretirement = _g[0], setEarlyRretirement = _g[1]; // ускоренный выход на пенсию
    var yearPersent = 0.05; // годовой процент накопления => annualPercentage
    var generalAccumValue = 5143933; // общие накопления => generalSavings
    var pensionValue = 28577; // размер выплаты пенсии => pension
    var radioItems = [
        { value: "65", title: "М", name: "gender" },
        { value: "60", title: "Ж", name: "gender" },
    ];
    var ageSlider = {
        title: "Возраст, лет",
        name: "ageSlider",
        min: 18,
        max: ageSliderMax,
        step: 1,
        value: 30,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    var downPaymentSlider = {
        title: " Первоначальный взнос, р",
        name: "downPayment",
        min: 0,
        max: 1000000,
        step: 10000,
        value: 10000,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    var monthlyInstallmenSlider = {
        title: "Ежемесячный взнос, р.",
        name: "monthlyInstallment",
        min: 0,
        max: 50000,
        step: 500,
        value: 5000,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    var periodPaymentPensionSlider = {
        title: "Срок выплаты пенсии, лет",
        name: "periodPaymentPension",
        min: 5,
        max: 30,
        step: 1,
        value: 15,
        emitValue: function (event) {
            throw new Error("Function not implemented.");
        }
    };
    var onChangeGenderRadio = function (valueRadio) {
        setGenderValue(valueRadio);
        if (valueRadio === "65") {
            setAgeSliderMax(65);
        }
        else {
            setAgeSliderMax(60);
        }
    };
    var ageSliderHandler = function (ageSliderValue) {
        setAgeValue(ageSliderValue);
    };
    var downPaymentSliderHandler = function (downPaymentValue) {
        setDownPayment(downPaymentValue);
    };
    var monthlyInstallmenSliderHandler = function (monthlyInstallmentValue) {
        setMonthlyInstallment(monthlyInstallmentValue);
    };
    var periodPaymentPensionSliderHandler = function (periodPaymentPension) {
        setPeriodPaymentPension(periodPaymentPension);
    };
    var toogleChecked = function () {
        setEarlyRretirement(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement("section", { id: "calculator", className: Calc_module_scss_1["default"]["calculator"] },
        react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__container"] },
            react_1["default"].createElement("h2", { className: Calc_module_scss_1["default"]["calculator__heading"] }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"),
            react_1["default"].createElement("h1", { className: Calc_module_scss_1["default"]["calculator__subheading"] }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0443\u0434\u0443\u0449\u0443\u044E \u043F\u0435\u043D\u0441\u0438\u044E"),
            react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__block"] },
                react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__box"] },
                    react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__sliders"] },
                        react_1["default"].createElement("form", { className: Calc_module_scss_1["default"]["slider-block"] },
                            react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["slider-block__age"] },
                                react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["slider-block__switch"] },
                                    react_1["default"].createElement(RadioSecondary_1["default"], { radioItems: radioItems, emitValue: onChangeGenderRadio })),
                                react_1["default"].createElement(Slider_1["default"], { title: ageSlider.title, name: ageSlider.name, min: ageSlider.min, max: ageSlider.max, step: ageSlider.step, value: ageSlider.value, emitValue: ageSliderHandler })),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Slider_1["default"], { title: downPaymentSlider.title, name: downPaymentSlider.name, min: downPaymentSlider.min, max: downPaymentSlider.max, step: downPaymentSlider.step, value: downPaymentSlider.value, emitValue: downPaymentSliderHandler }),
                                react_1["default"].createElement(Slider_1["default"], { title: monthlyInstallmenSlider.title, name: monthlyInstallmenSlider.name, min: monthlyInstallmenSlider.min, max: monthlyInstallmenSlider.max, step: monthlyInstallmenSlider.step, value: monthlyInstallmenSlider.value, emitValue: monthlyInstallmenSliderHandler }),
                                react_1["default"].createElement(Slider_1["default"], { title: periodPaymentPensionSlider.title, name: periodPaymentPensionSlider.name, min: periodPaymentPensionSlider.min, max: periodPaymentPensionSlider.max, step: periodPaymentPensionSlider.step, value: periodPaymentPensionSlider.value, emitValue: periodPaymentPensionSliderHandler })),
                            react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["slider-block__checkbox"] },
                                react_1["default"].createElement(Checkbox_1["default"], { checkedValue: earlyRretirement, toogleChecked: toogleChecked })),
                            !earlyRretirement && (react_1["default"].createElement("p", { className: Calc_module_scss_1["default"]["slider-block__checkbox-value"] }, "* \u0420\u0430\u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430, \u0434\u0430\u044E\u0449\u0435\u0433\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u0435\u043D\u0441\u0438\u0438 \u043F\u043E \u0441\u0442\u0430\u0440\u043E\u0441\u0442\u0438, \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043E \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C.")))),
                    react_1["default"].createElement(PensionInfo_1["default"], { generalAccumValue: generalAccumValue, pensionValue: pensionValue })),
                react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__graph-container"] },
                    react_1["default"].createElement(Graph_1["default"], null))))));
};
exports["default"] = Calculator;
