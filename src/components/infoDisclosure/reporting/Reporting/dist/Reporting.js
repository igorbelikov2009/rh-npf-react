"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InfoDisclosurePageData_1 = require("../../../../data/InfoDisclosurePageData");
var reportingsAPI_1 = require("../../../../services/reportingsAPI");
var ButtonToArchive_1 = require("../../../ui/buttons/ButtonToArchive/ButtonToArchive");
var AdaptiveRadio_1 = require("../../../ui/radios/AdaptiveRadio/AdaptiveRadio");
var ControllerOption_1 = require("../../../ui/select/controllerOption/ControllerOption/ControllerOption");
var Reports_1 = require("../Reports/Reports");
var Reporting_module_scss_1 = require("./Reporting.module.scss");
var Reporting = function (_a) {
    var onClickArchiveReporting = _a.onClickArchiveReporting;
    var _b = react_1.useState("2021"), currentValue = _b[0], setCurrentValue = _b[1];
    var _c = react_1.useState("0"), id = _c[0], setId = _c[1];
    var _d = react_1.useState(false), isControllerOptionVisible = _d[0], setControllerOptionVisible = _d[1];
    // Поучаем данные с сервера
    var reportings = reportingsAPI_1.reportingsAPI.useGetReportingsQuery().data;
    var onChangeAdaptiveRadio = function (value, id) {
        setCurrentValue(value);
        setId(id);
    };
    var onClickController = function () {
        setControllerOptionVisible(function (prev) { return !prev; });
    };
    var onChangeControllerOption = function (value, id) {
        setCurrentValue(value);
        setId(id);
    };
    var onClickControllerOption = function () {
        setControllerOptionVisible(false);
    };
    return (react_1["default"].createElement("section", { className: Reporting_module_scss_1["default"]["reporting"] },
        react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__container"] },
            react_1["default"].createElement("h1", { className: Reporting_module_scss_1["default"]["reporting__heading"] }, "\u041E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C"),
            react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__flex-container"] },
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__select"] },
                    react_1["default"].createElement(ControllerOption_1["default"], { currentValue: currentValue, emitOnChangeRadioListBlock: onChangeControllerOption, isRadioListVisible: isControllerOptionVisible, emitOnClickRadioListBlock: onClickControllerOption, onClickController: onClickController, radioItems: InfoDisclosurePageData_1.radioItemsReporting })),
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__adaptive-radio"] },
                    react_1["default"].createElement(AdaptiveRadio_1["default"], { currentValue: currentValue, radioItems: InfoDisclosurePageData_1.radioItemsReporting, emitValue: onChangeAdaptiveRadio })),
                react_1["default"].createElement("div", { className: Reporting_module_scss_1["default"]["reporting__container-button"], onClick: onClickArchiveReporting },
                    react_1["default"].createElement(ButtonToArchive_1["default"], null))),
            react_1["default"].createElement("div", null, reportings &&
                reportings.map(function (reports, index) { return (react_1["default"].createElement(Reports_1["default"], { key: index, reports: reports, isVisible: index === Number(id) })); })))));
};
exports["default"] = Reporting;
