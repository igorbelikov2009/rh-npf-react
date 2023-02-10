"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioListController_1 = require("../RadioListController/RadioListController");
var RadioListOptionBlock_1 = require("../RadioListOptionBlock/RadioListOptionBlock");
var RadioList_module_scss_1 = require("./RadioList.module.scss");
var RadioList = function (_a) {
    var isRadioListVisible = _a.isRadioListVisible, radioItems = _a.radioItems, currentValue = _a.currentValue, currentId = _a.currentId, onClickController = _a.onClickController, emitOnChangeRadioListBlock = _a.emitOnChangeRadioListBlock, emitOnClickRadioListBlock = _a.emitOnClickRadioListBlock;
    var onClickRadioListController = function () {
        onClickController();
    };
    var onChangeRadioListBlock = function (value, id) {
        emitOnChangeRadioListBlock(value, id);
    };
    var onClickRadioListBlock = function () {
        emitOnClickRadioListBlock();
    };
    return (react_1["default"].createElement("div", { className: RadioList_module_scss_1["default"]["list"] },
        react_1["default"].createElement(RadioListController_1["default"], { value: currentValue, isVisible: isRadioListVisible, onClickController: onClickRadioListController }),
        react_1["default"].createElement("div", { className: isRadioListVisible ? RadioList_module_scss_1["default"]["select-options_show"] : RadioList_module_scss_1["default"]["select-options_hide"] },
            react_1["default"].createElement(RadioListOptionBlock_1["default"], { radioItems: radioItems, currentValue: currentValue, emitValue: onChangeRadioListBlock, onClickOptionsBlock: onClickRadioListBlock }))));
};
exports["default"] = RadioList;
