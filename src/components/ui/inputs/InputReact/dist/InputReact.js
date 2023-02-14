"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var InputTitle_1 = require("../InputTitle/InputTitle");
var InputReact_module_scss_1 = require("./InputReact.module.scss");
var react_hook_form_1 = require("react-hook-form");
var InputReact = function (_a) {
    var _b;
    var type = _a.type, name = _a.name, title = _a.title;
    //   const [isActive, setActive] = useState(false);
    var _c = react_1.useState(true), isDormancy = _c[0], setDormancy = _c[1];
    var _d = react_hook_form_1.useForm({ mode: "onBlur" }), register = _d.register, errors = _d.formState.errors;
    return (react_1["default"].createElement("label", { className: InputReact_module_scss_1["default"]["my-input__label"] },
        react_1["default"].createElement(InputTitle_1["default"], { title: title, isDormancy: isDormancy }),
        react_1["default"].createElement("input", __assign({ className: errors ? InputReact_module_scss_1["default"]["my-input__field_invalid"] : InputReact_module_scss_1["default"]["my-input__field"], type: type }, register("fieldName", {
            required: "Это поле обязательно к заполнению",
            onBlur: function () {
                setDormancy(true);
            },
            maxLength: {
                value: 11,
                message: "Максимум 11 символов"
            }
        }), { name: name, onFocus: function () { return setDormancy(false); }, onBlur: function () { return setDormancy(true); } })),
        (errors === null || errors === void 0 ? void 0 : errors.fieldName) && react_1["default"].createElement("p", { className: InputReact_module_scss_1["default"]["my-input__error"] },
            ((_b = errors === null || errors === void 0 ? void 0 : errors.fieldName) === null || _b === void 0 ? void 0 : _b.message) || "Error!",
            " ")));
};
exports["default"] = InputReact;
