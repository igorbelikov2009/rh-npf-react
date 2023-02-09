"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_module_scss_1 = require("./RadioSecondaryLabel.module.scss");
var RadioSecondaryLabel = function (_a) {
    var value = _a.value, title = _a.title, name = _a.name, isActive = _a.isActive, emitValue = _a.emitValue;
    var _b = react_1.useState(), setValueRadio = _b[1];
    var radioHandler = function (event) {
        // console.log(event.target.value);
        setValueRadio(event.target.value);
        emitValue(event.target.value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label_active"] : RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label"] },
        react_1["default"].createElement("input", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__field"], type: "radio", value: value, name: name, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__title"] }, title)));
};
exports["default"] = RadioSecondaryLabel;
