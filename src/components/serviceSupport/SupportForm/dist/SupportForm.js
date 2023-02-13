"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-vars */
var react_1 = require("react");
var PrimaryButton_1 = require("../../ui/buttons/PrimaryButton/PrimaryButton");
var SupportForm_module_scss_1 = require("./SupportForm.module.scss");
var SupportForm = function () {
    var _a = react_1.useState(false), registrationPassed = _a[0], setRegistrationPassed = _a[1];
    var _b = react_1.useState(""), firstName = _b[0], setFirstName = _b[1];
    var _c = react_1.useState(""), phone = _c[0], setPhone = _c[1];
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(""), companyName = _e[0], setCompanyName = _e[1];
    var _f = react_1.useState(""), message = _f[0], setMessage = _f[1];
    var formHandler = function (event) {
        event.preventDefault();
    };
    return (react_1["default"].createElement("section", { className: SupportForm_module_scss_1["default"]["support-form"], onSubmit: formHandler },
        react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__container"] },
            react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__content"] },
                react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__customer-service"] },
                    react_1["default"].createElement("h1", { className: SupportForm_module_scss_1["default"]["support-form__header"] },
                        "\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0430\u044F ",
                        react_1["default"].createElement("span", { className: SupportForm_module_scss_1["default"]["support-form__span"] }, "\u0441\u043B\u0443\u0436\u0431\u0430")),
                    react_1["default"].createElement("a", { className: SupportForm_module_scss_1["default"]["support-form__phone-support"], href: "tel:+78002004766" }, "8 800 200-47-66"),
                    react_1["default"].createElement("p", { className: SupportForm_module_scss_1["default"]["support-form__phone-title"] }, "\u0437\u0432\u043E\u043D\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439")),
                react_1["default"].createElement("form", { className: SupportForm_module_scss_1["default"]["support-form__form"] },
                    react_1["default"].createElement("div", { className: SupportForm_module_scss_1["default"]["support-form__button-container"] },
                        react_1["default"].createElement(PrimaryButton_1["default"], { children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })))))));
};
exports["default"] = SupportForm;
