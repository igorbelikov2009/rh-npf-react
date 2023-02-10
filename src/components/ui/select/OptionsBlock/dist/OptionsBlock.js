"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Option_1 = require("../Option/Option");
var OptionsBlock_module_scss_1 = require("./OptionsBlock.module.scss");
var OptionsBlock = function (_a) {
    var arrayOptionsBlock = _a.arrayOptionsBlock, emitValue = _a.emitValue, onClickOptionsBlock = _a.onClickOptionsBlock, currentValue = _a.currentValue;
    var onChangeOption = function (value, id) {
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: OptionsBlock_module_scss_1["default"]["options-block"], onClick: onClickOptionsBlock },
        react_1["default"].createElement("div", { className: OptionsBlock_module_scss_1["default"]["scrollable-block"] }, arrayOptionsBlock.map(function (option, index) { return (react_1["default"].createElement(Option_1["default"], { key: index, date: option.date, value: option.value, id: option.id, isActive: option.value === currentValue, emitValue: onChangeOption })); }))));
};
exports["default"] = OptionsBlock;
