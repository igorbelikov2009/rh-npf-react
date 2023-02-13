"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputField_module_scss_1 = require("./InputField.module.scss");
var InputField = function (_a) {
    var type = _a.type, value = _a.value, name = _a.name, hasError = _a.hasError, emitValue = _a.emitValue, emitFocus = _a.emitFocus, emitBlur = _a.emitBlur;
    var inputHandler = function (event) {
        emitValue(event.target.value);
        console.log(event.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("input", { className: hasError ? InputField_module_scss_1["default"]["my-input__field_invalid"] : InputField_module_scss_1["default"]["my-input__field"], type: type, name: name, value: value, onFocus: emitFocus, onBlur: emitBlur, onChange: inputHandler })));
};
exports["default"] = InputField;
