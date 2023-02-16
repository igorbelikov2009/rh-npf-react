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
var InputSubmit_1 = require("../../ui/inputs/InputSubmit/InputSubmit");
var CallBack_module_scss_1 = require("./CallBack.module.scss");
var react_hook_form_1 = require("react-hook-form");
var InputTitle_1 = require("../../ui/inputs/InputTitle/InputTitle");
var CallBack = function (_a) {
    var _b, _c;
    var closeCallBack = _a.closeCallBack, isVisible = _a.isVisible;
    var _d = react_1.useState(true), isDormancyUserName = _d[0], setDormancyUserName = _d[1];
    var _e = react_1.useState(true), isDormancyPhone = _e[0], setDormancyPhone = _e[1];
    var _f = react_hook_form_1.useForm({ mode: "all" }), register = _f.register, // позволяет регистрировать различные поля для форм
    _g = _f.formState, errors = _g.errors, isValid = _g.isValid, // объект с ошибками и т.д...
    handleSubmit = _f.handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset = _f.reset, // для очистки полей после отправки формы
    watch = _f.watch;
    var userData = {};
    // наш кастомный обработчик отправки формы
    var onSubmit = function (data) {
        //  data - это набор данных из нашей формы
        userData = data;
        // console.log(data);
        // console.log(userData);
        localStorage.setItem("userData-renaissance-pension", JSON.stringify(userData));
        reset();
        setDormancyUserName(true);
        setDormancyPhone(true);
        closeCallBack();
    };
    // console.log(watch("firstName")); // следит за изменением значения
    // Восстановить из localStorage
    if (localStorage.getItem("userData-renaissance-pension")) {
        userData = JSON.parse(localStorage.getItem("userData-renaissance-pension") || "");
        // Для typescript вы можете использовать ||оператор и добавить к нему строку, чтобы она больше
        // не была нулевой. JSON.parse(localStorage.getItem("userData-renaissance-pension") || "")
    }
    // console.log(userData);
    return (react_1["default"].createElement("form", { className: CallBack_module_scss_1["default"]["call-back"], onSubmit: handleSubmit(onSubmit) },
        react_1["default"].createElement("div", { className: CallBack_module_scss_1["default"]["call-back__input-container"] },
            react_1["default"].createElement("label", { className: CallBack_module_scss_1["default"]["my-input__label"] },
                react_1["default"].createElement(InputTitle_1["default"], { title: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?", isDormancy: isDormancyUserName }),
                react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.userName) ? CallBack_module_scss_1["default"]["my-input__field_invalid"] : CallBack_module_scss_1["default"]["my-input__field"], type: "text" }, register("userName", {
                    required: "Это поле обязательно к заполнению",
                    onChange: function (event) {
                        setDormancyUserName(false);
                    },
                    onBlur: function () {
                        if (watch("userName").length === 0) {
                            setDormancyUserName(true);
                        }
                    },
                    minLength: {
                        value: 3,
                        message: "Минимум 3 символов"
                    }
                }))),
                (errors === null || errors === void 0 ? void 0 : errors.userName) && (react_1["default"].createElement("span", { className: CallBack_module_scss_1["default"]["my-input__error"] },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        " ",
                        ((_b = errors === null || errors === void 0 ? void 0 : errors.userName) === null || _b === void 0 ? void 0 : _b.message) || "Error!"))))),
        react_1["default"].createElement("div", { className: CallBack_module_scss_1["default"]["call-back__input-container"] },
            react_1["default"].createElement("label", { className: CallBack_module_scss_1["default"]["my-input__label"] },
                react_1["default"].createElement(InputTitle_1["default"], { title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", isDormancy: isDormancyPhone }),
                react_1["default"].createElement("input", __assign({ className: (errors === null || errors === void 0 ? void 0 : errors.phone) ? CallBack_module_scss_1["default"]["my-input__field_invalid"] : CallBack_module_scss_1["default"]["my-input__field"], type: "tel" }, register("phone", {
                    required: "Это поле обязательно к заполнению",
                    onChange: function (event) {
                        setDormancyPhone(false);
                    },
                    onBlur: function () {
                        if (watch("phone").length === 0) {
                            setDormancyPhone(true);
                        }
                    },
                    minLength: {
                        value: 11,
                        message: "Минимум 11 символов"
                    },
                    maxLength: {
                        value: 16,
                        message: "Максимум 16 символов"
                    }
                }))),
                (errors === null || errors === void 0 ? void 0 : errors.phone) && (react_1["default"].createElement("span", { className: CallBack_module_scss_1["default"]["my-input__error"] },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        " ",
                        ((_c = errors === null || errors === void 0 ? void 0 : errors.phone) === null || _c === void 0 ? void 0 : _c.message) || "Error!",
                        " "))))),
        react_1["default"].createElement("div", { className: CallBack_module_scss_1["default"]["call-back__button-container"] },
            react_1["default"].createElement(InputSubmit_1["default"], { children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", disabled: !isValid }))));
};
exports["default"] = CallBack;
