"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_module_scss_1 = require("./Paragraph.module.scss");
var Paragraph = function (_a) {
    var text = _a.text;
    return react_1["default"].createElement("p", { className: Paragraph_module_scss_1["default"]["paragraph"] }, text);
};
exports["default"] = Paragraph;
