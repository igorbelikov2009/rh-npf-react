"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InfoDisclosurePageData_1 = require("../../../../data/InfoDisclosurePageData");
var fundIndicatorsAPI_1 = require("../../../../services/fundIndicatorsAPI");
var AdaptiveRadio_1 = require("../../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var ControllerOption_1 = require("../../../ui/select/controllerOption/ControllerOption/ControllerOption");
var IndicatorsYear_1 = require("../IndicatorsYear/IndicatorsYear");
var FundPerformance_module_scss_1 = require("./FundPerformance.module.scss");
var FundPerformance = function () {
    var _a = react_1.useState("2021"), currentValue = _a[0], setCurrentValue = _a[1];
    var _b = react_1.useState("0"), idOptions = _b[0], setIdOptions = _b[1];
    var _c = react_1.useState(false), isRadioListVisible = _c[0], setRadioListVisible = _c[1];
    // Получаем данные с сервера
    var fundIndicators = fundIndicatorsAPI_1.fundIndicatorsAPI.useGetFundIndicatorsQuery().data;
    var onChangeAdaptiveRadio = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickController = function () {
        setRadioListVisible(function (prev) { return !prev; });
    };
    var onChangeRadioListBlock = function (value, id) {
        setCurrentValue(value);
        setIdOptions(id);
    };
    var onClickRadioListBlock = function () {
        setRadioListVisible(false);
    };
    return (react_1["default"].createElement("section", { className: FundPerformance_module_scss_1["default"]["fund-performance"] },
        react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__container"] },
            react_1["default"].createElement("h1", { className: FundPerformance_module_scss_1["default"]["fund-performance__heading"] }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0444\u043E\u043D\u0434\u0430"),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__flex-container"] },
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__select"] },
                    react_1["default"].createElement(ControllerOption_1["default"], { currentValue: currentValue, radioItems: InfoDisclosurePageData_1.radioItemsFundPerformance, isRadioListVisible: isRadioListVisible, onClickController: onClickController, emitOnChangeRadioListBlock: onChangeRadioListBlock, emitOnClickRadioListBlock: onClickRadioListBlock })),
                react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__adaptive-radio"] },
                    react_1["default"].createElement(AdaptiveRadio_1["default"], { radioItems: InfoDisclosurePageData_1.radioItemsFundPerformance, currentValue: currentValue, emitValue: onChangeAdaptiveRadio }))),
            react_1["default"].createElement("div", { className: FundPerformance_module_scss_1["default"]["fund-performance__list"] }, fundIndicators &&
                fundIndicators.map(function (item, index) { return (react_1["default"].createElement(IndicatorsYear_1["default"], { key: index, heading: item.heading, subheading: item.subheading, archiveLinks: item.archiveLinks, indicatorRows: item.indicatorRows, isVisible: Number(idOptions) === index })); })))));
};
exports["default"] = FundPerformance;
