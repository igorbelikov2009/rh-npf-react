"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Option_1 = require("../Option/Option");
var OptionsBlock_module_scss_1 = require("./OptionsBlock.module.scss");
var OptionsBlock = function (_a) {
    var selectionOptions = _a.selectionOptions, emitValue = _a.emitValue, onClickSelectionBlock = _a.onClickSelectionBlock;
    var _b = react_1.useState("2021-11-30T09:00:00.000Z"), selectedValue = _b[0], setSelectedValue = _b[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = react_1.useState("0"), idOption = _c[0], setIdOption = _c[1];
    var onChangeOption = function (value, id) {
        setSelectedValue(value);
        setIdOption(id);
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: OptionsBlock_module_scss_1["default"]["options-block"], onClick: onClickSelectionBlock },
        react_1["default"].createElement("div", { className: OptionsBlock_module_scss_1["default"]["scrollable-block"] }, selectionOptions.map(function (option, index) { return (react_1["default"].createElement(Option_1["default"], { key: index, date: option.date, value: option.value, id: option.id, isActive: option.value === selectedValue, emitValue: onChangeOption })); }))));
};
exports["default"] = OptionsBlock;
