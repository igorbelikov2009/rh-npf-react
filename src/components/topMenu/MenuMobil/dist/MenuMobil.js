"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Logotypes_1 = require("../../general/Logotypes/Logotypes");
var MenuMobil_module_scss_1 = require("./MenuMobil.module.scss");
var MenuMobil = function (_a) {
    var closeMenuMobil = _a.closeMenuMobil, isVisible = _a.isVisible;
    var navigate = react_router_dom_1.useNavigate();
    var isBackgroundWhite = react_1.useState(true)[0];
    var topLinks = [
        { to: "/about", children: "О Фонде" },
        { to: "/managment", children: "Руководство Фондом" },
        { to: "/info", children: "Раскрытие информации" },
        { to: "/investment", children: "Инвестиционная деятельность" },
        { to: "/business", children: "Для бизнеса" },
    ];
    var bottomLinks = [
        { to: "/#calculator", children: "Калькулятор" },
        { to: "/support#form", children: "Написать нам" },
        { to: "/support#questionsAnswers", children: "Вопросы и ответы" },
    ];
    return (react_1["default"].createElement("section", { className: isVisible ? MenuMobil_module_scss_1["default"]["menu-mobil__right-20"] : MenuMobil_module_scss_1["default"]["menu-mobil__right-100"] },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: MenuMobil_module_scss_1["default"]["menu-mobil__logos"], onClick: function () { return navigate("/", { replace: true }); } },
                react_1["default"].createElement(Logotypes_1["default"], { isBackgroundWhite: isBackgroundWhite })),
            topLinks.map(function (link, index) { return (react_1["default"].createElement(react_router_dom_1.Link, { to: link.to, onClick: closeMenuMobil, className: MenuMobil_module_scss_1["default"]["menu-mobil__link"], key: index }, link.children)); }),
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__title"] }, "\u041A\u043B\u0438\u0435\u043D\u0442\u0430\u043C"),
            bottomLinks.map(function (link, index) { return (react_1["default"].createElement(react_router_dom_1.Link, { to: link.to, onClick: closeMenuMobil, className: MenuMobil_module_scss_1["default"]["menu-mobil__link"], key: index }, link.children)); }),
            react_1["default"].createElement("div", { className: MenuMobil_module_scss_1["default"]["menu-mobil__phone"] },
                react_1["default"].createElement("a", { className: MenuMobil_module_scss_1["default"]["menu-mobil__phone-link"], href: "tel:+78002004766" },
                    react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__phone-number"] }, "8 800 200-47-66")))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__copy-right"] }, "\u00A92009-2019 \u041D\u041F\u0424\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441. \u041F\u0435\u043D\u0441\u0438\u0438"),
            react_1["default"].createElement("p", { className: MenuMobil_module_scss_1["default"]["menu-mobil__copy-right"] }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u2116 383/2 \u043E\u0442 16 \u0438\u044E\u043D\u044F 2009 \u0433\u043E\u0434\u0430")),
        react_1["default"].createElement("button", { className: MenuMobil_module_scss_1["default"]["menu-mobil__cross-switch"] },
            react_1["default"].createElement("img", { className: MenuMobil_module_scss_1["default"]["menu-mobil__cross-image"], src: "/icons/triple/Cross/Dark.svg", alt: "cross", onClick: closeMenuMobil }))));
};
exports["default"] = MenuMobil;
