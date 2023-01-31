"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Paragraph_1 = require("./Paragraph/Paragraph");
var ParagraphsArr = function (_a) {
    var paragraphsArray = _a.paragraphsArray;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, paragraphsArray.map(function (par, index) { return (react_1["default"].createElement(Paragraph_1["default"], { key: index, text: par.text })); })));
};
exports["default"] = ParagraphsArr;
