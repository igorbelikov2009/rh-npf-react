"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioCircle_module_scss_1 = require("./RadioCircle.module.scss");
var RadioCircleItem_1 = require("../RadioCircleItem/RadioCircleItem");
var RadioCircle = function (_a) {
    var radioItems = _a.radioItems, currentValue = _a.currentValue, emitValue = _a.emitValue;
    var onChangeRadioItem = function (value) {
        emitValue(value);
    };
    return (react_1["default"].createElement("div", { className: RadioCircle_module_scss_1["default"]["radio-circle"] },
        react_1["default"].createElement("div", { className: RadioCircle_module_scss_1["default"]["radio-circle__items-container"] }, radioItems.map(function (item, index) { return (react_1["default"].createElement(RadioCircleItem_1["default"], { key: index, value: item.value, title: item.title, isActive: item.value === currentValue, emitValue: onChangeRadioItem })); }))));
};
exports["default"] = RadioCircle;
