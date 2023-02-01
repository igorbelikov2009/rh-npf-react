"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeadCell_1 = require("../HeadCell/HeadCell");
require("./RowHeadings.scss");
var RowHeadings = function (_a) {
    var headings = _a.headings;
    return (react_1["default"].createElement("tr", null, headings.map(function (head, index) { return (react_1["default"].createElement(HeadCell_1["default"], { key: index, titleHeadCell: head.titleHeadCell })); })));
};
exports["default"] = RowHeadings;
