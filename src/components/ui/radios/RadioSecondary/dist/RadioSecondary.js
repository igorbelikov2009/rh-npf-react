"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_1 = require("../RadioSecondaryLabel/RadioSecondaryLabel");
var RadioSecondary_module_scss_1 = require("./RadioSecondary.module.scss");
var RadioSecondary = function (_a) {
    var radioItems = _a.radioItems;
    return (react_1["default"].createElement("div", { className: RadioSecondary_module_scss_1["default"]["radio-secondary"] }, radioItems.map(function (item) { return (react_1["default"].createElement(RadioSecondaryLabel_1["default"], { key: item.value, title: item.title, valueRadio: item.value, isActive: true })); })));
};
exports["default"] = RadioSecondary;
