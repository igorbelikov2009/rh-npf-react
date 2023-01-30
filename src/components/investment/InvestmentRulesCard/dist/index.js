"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DarkIcon_1 = require("../../general/DarkIcon/DarkIcon");
var index_module_scss_1 = require("./index.module.scss");
var index = function (_a) {
    var icon = _a.icon, title = _a.title;
    return (react_1["default"].createElement("div", { className: index_module_scss_1["default"]["investment-rules__block"] },
        react_1["default"].createElement("div", { className: index_module_scss_1["default"]["investment-rules__icon"] },
            react_1["default"].createElement(DarkIcon_1["default"], { icon: icon })),
        react_1["default"].createElement("p", { className: index_module_scss_1["default"]["investment-rules__title"] }, title)));
};
exports["default"] = index;
