"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioListOption_module_scss_1 = require("./RadioListOption.module.scss");
var RadioListOption = function (_a) {
    var isActive = _a.isActive, date = _a.date, value = _a.value, id = _a.id, emitValue = _a.emitValue;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _b = react_1.useState(""), valueRadio = _b[0], setValueRadio = _b[1];
    var selectHandler = function (event) {
        setValueRadio(event.target.value);
        emitValue(event.target.value, id);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioListOption_module_scss_1["default"]["option-active"] : RadioListOption_module_scss_1["default"]["option"] },
        date,
        react_1["default"].createElement("input", { className: RadioListOption_module_scss_1["default"]["input"], type: "radio", value: value, id: id, name: "date", onChange: selectHandler })));
};
exports["default"] = RadioListOption;
