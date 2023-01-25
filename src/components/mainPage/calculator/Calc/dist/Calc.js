"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var PrimaryButton_1 = require("../../../ui/buttons/PrimaryButton/PrimaryButton");
var RadioSecondary_1 = require("../../../ui/radios/RadioSecondary/RadioSecondary");
var Slider_1 = require("../../../ui/Slider/Slider");
var Graph_1 = require("../Graph/Graph");
var PensionInfo_1 = require("../PensionInfo/PensionInfo");
var Calc_module_scss_1 = require("./Calc.module.scss");
var Calculator = function () {
    var _a = react_1.useState(65), genderValue = _a[0], setGenderValue = _a[1]; // гендерный возраст выхода на пенсию
    var ageValue = 30; // текущий возраст
    var numberOfYears = 35; // срок инвестирования => investmentTerm
    var firstInvestValue = ""; // первичный взнос => downPayment
    var monthInvestValue = ""; // ежемесячный взнос => monthlyInstallment
    var timePaymentsValue = ""; // срок выплат пенсии => periodPaymentPension
    var yearPersent = 0.05; // годовой процент накопления => annualPercentage
    var generalAccumValue = 5143933; // общие накопления => generalSavings
    var pensionValue = 28577; // размер выплаты пенсии => pension
    var radioItems = [
        { value: 65, title: "М" },
        { value: 60, title: "Ж" },
    ];
    var ageSlider = {
        title: "Возраст, лет",
        name: "ageSlider",
        min: 18,
        max: 65,
        step: 1,
        currentValue: 30
    };
    var sliders = [
        {
            title: " Первоначальный взнос, р",
            name: "firstPayment",
            min: 0,
            max: 1000000,
            step: 10000,
            currentValue: 10000
        },
        {
            title: "Ежемесячный взнос, р.",
            name: "monthlyPayment",
            min: 0,
            max: 50000,
            step: 500,
            currentValue: 5000
        },
        {
            title: "Срок выплаты пенсии, лет",
            name: "dueDate",
            min: 5,
            max: 30,
            step: 1,
            currentValue: 15
        },
    ];
    // validations: {
    //   genderValue: { minValue: minValue(65), maxValue: maxValue(65) },
    //   sliders: { required, numeric },
    //   ageSlider: { required, numeric },
    // },
    var onChangeGenderRadio = function (valueRadio) {
        setGenderValue(valueRadio);
        console.log("genderValue :" + genderValue);
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
                                react_1["default"].createElement(Slider_1["default"], { title: ageSlider.title, name: ageSlider.name, min: ageSlider.min, max: ageSlider.max, step: ageSlider.step })),
                            sliders.map(function (slid, index) { return (react_1["default"].createElement(Slider_1["default"], { key: index, title: slid.title, name: slid.name, min: slid.min, max: slid.max, step: slid.step })); }),
                            react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["slider-block__checkbox"] },
                                react_1["default"].createElement("label", { role: "checkbox", "aria-checked": "false", "aria-labelledby": "foo", className: Calc_module_scss_1["default"]["r-checkbox"] },
                                    react_1["default"].createElement("span", { className: Calc_module_scss_1["default"]["r-checkbox__checker"] }),
                                    react_1["default"].createElement("button", { className: Calc_module_scss_1["default"]["r-checkbox__switch_invisible"] }),
                                    react_1["default"].createElement("input", { id: "Checkbox", type: "checkbox", className: Calc_module_scss_1["default"]["r-checkbox__input"] }),
                                    react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["r-checkbox__agree-link"] }, "\u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0432\u044B\u0447\u0435\u0442"))),
                            react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["slider-block__button-container"] },
                                react_1["default"].createElement(PrimaryButton_1["default"], { children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440" })))),
                    react_1["default"].createElement(PensionInfo_1["default"], { generalAccumValue: generalAccumValue, pensionValue: pensionValue })),
                react_1["default"].createElement("div", { className: Calc_module_scss_1["default"]["calculator__graph-container"] },
                    react_1["default"].createElement(Graph_1["default"], null))))));
};
exports["default"] = Calculator;
