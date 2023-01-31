"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ParagraphBefore_module_scss_1 = require("./ParagraphBefore.module.scss");
var ParagraphBefore = function (_a) {
    var text = _a.text;
    return react_1["default"].createElement("p", { className: ParagraphBefore_module_scss_1["default"]["paragraph-before"] }, text);
};
exports["default"] = ParagraphBefore;
