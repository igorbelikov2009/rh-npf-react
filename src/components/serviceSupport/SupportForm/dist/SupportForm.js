"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var PrimaryButton_1 = require("../../ui/buttons/PrimaryButton/PrimaryButton");
var MyInput_1 = require("../../ui/inputs/MyInput/MyInput");
var SupportForm_module_scss_1 = require("./SupportForm.module.scss");
var SupportForm = function () {
    var _a = react_1.useState(false), registrationPassed = _a[0], setRegistrationPassed = _a[1];
    var _b = react_1.useState(""), firstName = _b[0], setFirstName = _b[1];
    var _c = react_1.useState(""), phone = _c[0], setPhone = _c[1];
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(""), companyName = _e[0], setCompanyName = _e[1];
    var _f = react_1.useState(""), message = _f[0], setMessage = _f[1];
    var checkForm = function (event) {
        event.preventDefault();
    };
    var onChangeFirstName = function (value) {
        setFirstName(value);
    };
    var onChangePhone = function (value) {
        setPhone(value);
    };
    var onChangeEmail = function (value) {
        setEmail(value);
    };
    var onChangeCompanyName = function (value) {
        setCompanyName(value);
    };
    var onChangeMessage = function (value) {
        setMessage(value);
    };
    return (react_1["default"].createElement("section", { className: SupportForm_module_scss_1["default"]["support-form"] },
        react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__container"] },
            react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__content"] },
                react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__customer-service"] },
                    react_1["default"].createElement("h1", { className: SupportForm_module_scss_1["default"]["support-form__header"] },
                        "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0430\u044F ",
                        react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["support-form__span"] }, "\u0441\u043B\u0443\u0436\u0431\u0430")),
                    react_1["default"].createElement("a", { className: SupportForm_module_scss_1["default"]["support-form__phone-support"], href: "tel:+78002004766" }, "8 800 200-47-66"),
                    react_1["default"].createElement("p", { className: SupportForm_module_scss_1["default"]["support-form__phone-title"] }, "\u0437\u0432\u043E\u043D\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439")),
                react_1["default"].createElement("form", { className: SupportForm_module_scss_1["default"]["support-form__form"], onSubmit: checkForm },
                    react_1["default"].createElement(MyInput_1["default"], { emitValue: onChangeFirstName, type: "text", name: "firstName", title: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", isRequiredError: true, isValidationError: false, validationError: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0438\u043C\u044F" }),
                    react_1["default"].createElement(MyInput_1["default"], { emitValue: onChangePhone, type: "text", name: "phone", title: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", maxLength: 11, isRequiredError: false, isValidationError: false, validationError: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440" }),
                    react_1["default"].createElement(MyInput_1["default"], { emitValue: onChangeEmail, type: "text", name: "email", title: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email", isRequiredError: false, isValidationError: false, validationError: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0438\u043C\u044F" }),
                    react_1["default"].createElement(MyInput_1["default"], { emitValue: onChangeCompanyName, type: "text", name: "companyName", title: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", isRequiredError: false, isValidationError: false, validationError: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0438\u043C\u044F" }),
                    react_1["default"].createElement(MyInput_1["default"], { emitValue: onChangeMessage, type: "text", name: "message", title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", isRequiredError: false, isValidationError: false, validationError: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 15" }),
                    react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__button-container"] },
                        react_1["default"].createElement(PrimaryButton_1["default"], { children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })))))));
};
exports["default"] = SupportForm;
