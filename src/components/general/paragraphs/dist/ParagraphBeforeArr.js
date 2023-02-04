"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ParagraphBefore_1 = require("./ParagraphBefore/ParagraphBefore");
var ParagraphBeforeArr = function (_a) {
    var paragraphsBeforeArray = _a.paragraphsBeforeArray;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, paragraphsBeforeArray.map(function (par, index) { return (react_1["default"].createElement(ParagraphBefore_1["default"], { key: index, paragraphs: paragraphsBeforeArray })); })));
};
exports["default"] = ParagraphBeforeArr;
