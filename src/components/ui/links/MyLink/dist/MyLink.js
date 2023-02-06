"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MyLink_module_scss_1 = require("./MyLink.module.scss");
var MyLink = function (_a) {
    var isActive = _a.isActive, href = _a.href, children = _a.children;
    return (react_1["default"].createElement("a", { className: isActive ? MyLink_module_scss_1["default"]["link_active"] : MyLink_module_scss_1["default"]["link"], href: href }, children));
};
exports["default"] = MyLink;
