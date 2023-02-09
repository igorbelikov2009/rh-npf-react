"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdaptiveRadioItem_1 = require("../AdaptiveRadioItem/AdaptiveRadioItem");
var AdaptiveRadio_module_scss_1 = require("./AdaptiveRadio.module.scss");
var AdaptiveRadio = function (_a) {
    var radioItems = _a.radioItems, currentValue = _a.currentValue, emitValue = _a.emitValue, currentId = _a.currentId;
    var _b = react_1.useState(currentValue), valueRadio = _b[0], setValueRadio = _b[1];
    var _c = react_1.useState(currentId), setIdOption = _c[1];
    var onChangeRadio = function (value, id) {
        setValueRadio(value);
        setIdOption(id);
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: AdaptiveRadio_module_scss_1["default"]["adaptive-radio"] }, radioItems.map(function (item) { return (react_1["default"].createElement(AdaptiveRadioItem_1["default"], { key: item.value, title: item.title, value: item.value, id: item.id, name: item.name, isActive: item.value === valueRadio, emitValue: onChangeRadio })); })));
};
exports["default"] = AdaptiveRadio;
