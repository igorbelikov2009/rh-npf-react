"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Option_1 = require("../Option/Option");
var OptionBlock_module_scss_1 = require("./OptionBlock.module.scss");
// ControllerOption здесь всё чётко
var OptionBlock = function (_a) {
    var radioItems = _a.radioItems, emitValue = _a.emitValue, onClickOptionsBlock = _a.onClickOptionsBlock, currentValue = _a.currentValue;
    var onChangeOption = function (value, id) {
        emitValue(value, id);
        // console.log(value, id);
    };
    return (react_1["default"].createElement("div", { className: OptionBlock_module_scss_1["default"]["options-block"], onClick: onClickOptionsBlock },
        react_1["default"].createElement("div", { className: OptionBlock_module_scss_1["default"]["scrollable-block"] }, radioItems.map(function (option, index) { return (react_1["default"].createElement(Option_1["default"], { key: index, date: option.date, value: option.value, id: option.id, isActive: option.value === currentValue, emitValue: onChangeOption })); }))));
};
exports["default"] = OptionBlock;
