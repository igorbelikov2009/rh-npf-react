"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_module_scss_1 = require("./RadioSecondaryLabel.module.scss");
var RadioSecondaryLabel = function (_a) {
    var title = _a.title, isActive = _a.isActive, valueRadio = _a.valueRadio;
    var _b = react_1.useState(0), value = _b[0], setValue = _b[1];
    var emitValue = function (event) {
        setValue(Number(event.target.value));
        console.log(value);
        valueRadio = value;
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label_active"] : RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label"] },
        react_1["default"].createElement("input", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__field"], type: "radio", value: value, onChange: emitValue }),
        react_1["default"].createElement("p", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__title"] }, title)));
};
exports["default"] = RadioSecondaryLabel;
