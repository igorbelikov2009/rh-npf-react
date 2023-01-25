"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_module_scss_1 = require("./RadioSecondaryLabel.module.scss");
var RadioSecondaryLabel = function (_a) {
    var title = _a.title, isActive = _a.isActive, value = _a.value, emitValue = _a.emitValue;
    var _b = react_1.useState(0), valueRadio = _b[0], setValueRadio = _b[1];
    var onChangeRadio = function (event) {
        setValueRadio(Number(event.target.value));
        value = valueRadio;
        emitValue(value);
        console.log(value);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label_active"] : RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label"] },
        react_1["default"].createElement("input", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__field"], type: "radio", value: value, onChange: onChangeRadio }),
        react_1["default"].createElement("p", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__title"] }, title)));
};
exports["default"] = RadioSecondaryLabel;
