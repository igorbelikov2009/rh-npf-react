"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioListController_1 = require("../RadioListController/RadioListController");
require("./RadioList.scss");
var RadioList = function (_a) {
    var isRadioListVisible = _a.isRadioListVisible, radioItems = _a.radioItems, currentValue = _a.currentValue, currentId = _a.currentId;
    var _b = react_1.useState(currentValue), radioValue = _b[0], setRadioValue = _b[1];
    var _c = react_1.useState(currentId), id = _c[0], setId = _c[1];
    var onClickRadioListController = function () { };
    return (react_1["default"].createElement("div", { className: "gui-radio-list" },
        react_1["default"].createElement(RadioListController_1["default"], { value: radioValue, isVisible: isRadioListVisible, radioItems: radioItems, onClickController: onClickRadioListController }),
        react_1["default"].createElement("div", { className: isRadioListVisible ? "gui-radio-list__select-options_show" : "gui-radio-list__select-options_hide" })));
};
exports["default"] = RadioList;
