"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Checkbox_module_scss_1 = require("./Checkbox.module.scss");
var Checkbox = function (_a) {
    var checkedValue = _a.checkedValue, toogleChecked = _a.toogleChecked;
    var checkboxHandler = function () {
        toogleChecked();
    };
    return (react_1["default"].createElement("label", { role: "checkbox", "aria-checked": true, "aria-labelledby": "foo", className: Checkbox_module_scss_1["default"]["r-checkbox"] },
        react_1["default"].createElement("span", { className: Checkbox_module_scss_1["default"]["r-checkbox__checker"] }),
        react_1["default"].createElement("div", { className: checkedValue ? Checkbox_module_scss_1["default"]["r-checkbox__switch_visible"] : Checkbox_module_scss_1["default"]["r-checkbox__switch_invisible"] }),
        react_1["default"].createElement("input", { type: "checkbox", checked: checkedValue, onChange: checkboxHandler, className: Checkbox_module_scss_1["default"]["r-checkbox__input"] }),
        react_1["default"].createElement("div", { className: Checkbox_module_scss_1["default"]["r-checkbox__agree-link"] }, "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u043F\u0435\u043D\u0441\u0438\u044E \u0432 55/60 \u043B\u0435\u0442*")));
};
exports["default"] = Checkbox;
