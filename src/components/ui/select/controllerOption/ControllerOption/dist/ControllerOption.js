"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Controller_1 = require("../Controller/Controller");
var OptionBlock_1 = require("../OptionBlock/OptionBlock");
var ControllerOption_module_scss_1 = require("./ControllerOption.module.scss");
var ControllerOption = function (_a) {
    var isRadioListVisible = _a.isRadioListVisible, optionsItems = _a.optionsItems, currentValue = _a.currentValue, onClickController = _a.onClickController, emitOnChangeRadioListBlock = _a.emitOnChangeRadioListBlock, emitOnClickRadioListBlock = _a.emitOnClickRadioListBlock;
    var onClickRadioListController = function () {
        onClickController();
    };
    var onChangeRadioListBlock = function (value, id) {
        emitOnChangeRadioListBlock(value, id);
    };
    var onClickRadioListBlock = function () {
        emitOnClickRadioListBlock();
    };
    return (react_1["default"].createElement("div", { className: ControllerOption_module_scss_1["default"]["list"] },
        react_1["default"].createElement(Controller_1["default"], { value: currentValue, isVisible: isRadioListVisible, onClickController: onClickRadioListController }),
        react_1["default"].createElement("div", { className: isRadioListVisible ? ControllerOption_module_scss_1["default"]["select-options_show"] : ControllerOption_module_scss_1["default"]["select-options_hide"] },
            react_1["default"].createElement(OptionBlock_1["default"], { optionsItems: optionsItems, currentValue: currentValue, emitValue: onChangeRadioListBlock, onClickOptionsBlock: onClickRadioListBlock }))));
};
exports["default"] = ControllerOption;
