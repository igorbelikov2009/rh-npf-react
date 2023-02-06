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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var AsideLink_module_scss_1 = require("./AsideLink.module.scss");
var AsideLink = function (_a) {
    var children = _a.children, to = _a.to, props = __rest(_a, ["children", "to"]);
    //параметром useMatch будет объект настройки
    var match = react_router_dom_1.useMatch({
        path: to,
        // полностью ссылка включена или нет.
        // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
        // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
        end: to.length === 1
    });
    //   console.log(match);
    return (react_1["default"].createElement(react_router_dom_1.Link, __assign({ to: to, className: match ? AsideLink_module_scss_1["default"]["link_active"] : AsideLink_module_scss_1["default"]["link"] }, props), children));
};
exports["default"] = AsideLink;
