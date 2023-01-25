"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RadioSecondaryLabel_module_scss_1 = require("./RadioSecondaryLabel.module.scss");
var RadioSecondaryLabel = function (_a) {
    var value = _a.value, title = _a.title, isActive = _a.isActive, name = _a.name, emitValue = _a.emitValue;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _b = react_1.useState(), valueRadio = _b[0], setValueRadio = _b[1];
    var radioHandler = function (event) {
        console.log(event.target.value);
        setValueRadio(event.target.value);
        emitValue(event.target.value);
        // console.log(valueRadio);
    };
    return (react_1["default"].createElement("label", { className: isActive ? RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label_active"] : RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label"] },
        react_1["default"].createElement("input", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__field"], type: "radio", value: value, name: name, onChange: radioHandler }),
        react_1["default"].createElement("p", { className: RadioSecondaryLabel_module_scss_1["default"]["radio-secondary-label__title"] }, title)));
};
exports["default"] = RadioSecondaryLabel;
