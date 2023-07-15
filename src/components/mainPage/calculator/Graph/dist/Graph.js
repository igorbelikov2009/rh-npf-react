"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Graph_module_scss_1 = require("./Graph.module.scss");
var Graph = function () {
    var listItems = Array(19)
        .fill(null)
        .map(function () { return react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__vertical-line"] }); });
    return (react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph"] },
        react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__diagram"] }, listItems),
        react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__years"] },
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2021"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2024"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2027"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2030"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2033"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2036"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2040"),
            react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__year"] }, "2043")),
        react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__sub"] },
            react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__subheading"] },
                react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__point-purple"] }),
                react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__title"] }, "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u043E\u0445\u043E\u0434")),
            react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__subheading"] },
                react_1["default"].createElement("div", { className: Graph_module_scss_1["default"]["graph__point-yellow"] }),
                react_1["default"].createElement("p", { className: Graph_module_scss_1["default"]["graph__title"] }, "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0432\u0437\u043D\u043E\u0441\u044B")))));
};
exports["default"] = Graph;
