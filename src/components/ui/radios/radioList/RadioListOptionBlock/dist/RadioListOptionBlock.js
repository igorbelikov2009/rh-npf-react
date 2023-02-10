"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioListOption_1 = require("../RadioListOption/RadioListOption");
var RadioListOptionBlock_module_scss_1 = require("./RadioListOptionBlock.module.scss");
var RadioListOptionBlock = function (_a) {
    var radioItems = _a.radioItems, emitValue = _a.emitValue, onClickOptionsBlock = _a.onClickOptionsBlock, currentValue = _a.currentValue;
    var _b = react_1.useState(currentValue), selectedValue = _b[0], setSelectedValue = _b[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = react_1.useState("0"), idOption = _c[0], setIdOption = _c[1];
    var onChangeOption = function (value, id) {
        setSelectedValue(value);
        setIdOption(id);
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: RadioListOptionBlock_module_scss_1["default"]["options-block"], onClick: onClickOptionsBlock },
        react_1["default"].createElement("div", { className: RadioListOptionBlock_module_scss_1["default"]["scrollable-block"] }, radioItems.map(function (option, index) { return (react_1["default"].createElement(RadioListOption_1["default"], { key: index, date: option.title, value: option.value, id: option.id, isActive: option.value === selectedValue, emitValue: onChangeOption })); }))));
};
exports["default"] = RadioListOptionBlock;
