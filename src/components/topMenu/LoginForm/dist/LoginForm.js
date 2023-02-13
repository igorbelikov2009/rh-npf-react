"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var PrimaryButton_1 = require("../../ui/buttons/PrimaryButton/PrimaryButton");
var LoginForm_module_scss_1 = require("./LoginForm.module.scss");
var LoginForm = function (_a) {
    var closeLoginForm = _a.closeLoginForm, isVisible = _a.isVisible;
    var checkForm = function (event) {
        event.preventDefault();
    };
    return (react_1["default"].createElement("form", { className: isVisible ? LoginForm_module_scss_1["default"]["login-form__opacity1"] : LoginForm_module_scss_1["default"]["login-form__opacity0"], onSubmit: checkForm },
        react_1["default"].createElement("h1", { className: LoginForm_module_scss_1["default"]["login-form__heading"] }, "\u0412\u0445\u043E\u0434"),
        react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__block-of-forms"] },
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] }, "PhoneInputCopy"),
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] }, "EmailInput"),
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__input-container"] }, "PasswordInput"),
            react_1["default"].createElement("div", { className: LoginForm_module_scss_1["default"]["login-form__button-container"] },
                react_1["default"].createElement(PrimaryButton_1["default"], { children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C" }))),
        react_1["default"].createElement("p", { className: LoginForm_module_scss_1["default"]["login-form__title"] },
            "\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
            react_1["default"].createElement("span", { className: LoginForm_module_scss_1["default"]["login-form__span"] }, " \u041D\u041F\u0424 \"\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441 - \u043F\u0435\u043D\u0441\u0438\u0438\"")),
        react_1["default"].createElement("p", { className: LoginForm_module_scss_1["default"]["login-form__subtitle"] }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u00AB\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\u00BB, \u0432\u044B \u0432\u044B\u0440\u0430\u0436\u0430\u0435\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"),
        react_1["default"].createElement("button", { className: LoginForm_module_scss_1["default"]["login-form__cross-switch"], onClick: closeLoginForm },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: "Cross" }))));
};
exports["default"] = LoginForm;
