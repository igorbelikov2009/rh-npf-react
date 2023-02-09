"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AdaptiveRadioItem_1 = require("../AdaptiveRadioItem/AdaptiveRadioItem");
var AdaptiveRadio_module_scss_1 = require("./AdaptiveRadio.module.scss");
var AdaptiveRadio = function (_a) {
    var radioItems = _a.radioItems, initialValue = _a.initialValue, emitValue = _a.emitValue;
    var _b = react_1.useState(initialValue), valueRadio = _b[0], setValueRadio = _b[1];
    var _c = react_1.useState("0"), setIdOption = _c[1];
    var onChangeRadio = function (value, id) {
        setValueRadio(value);
        setIdOption(id);
        emitValue(value, id);
    };
    return (react_1["default"].createElement("div", { className: AdaptiveRadio_module_scss_1["default"]["adaptive-radio"] }, radioItems.map(function (item, index) { return (react_1["default"].createElement(AdaptiveRadioItem_1["default"], { key: index, title: item.title, value: item.value, id: item.id, name: item.name, isActive: item.value === valueRadio, emitValue: onChangeRadio })); })));
};
exports["default"] = AdaptiveRadio;
