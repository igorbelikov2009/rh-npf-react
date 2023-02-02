"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CellHeading_1 = require("../CellHeading/CellHeading");
require("./RowHeadings.scss");
var RowHeadings = function (_a) {
    var headings = _a.headings;
    return (react_1["default"].createElement("tr", null, headings.map(function (head, index) { return (react_1["default"].createElement(CellHeading_1["default"], { key: index, titleCellHeading: head.titleCellHeading })); })));
};
exports["default"] = RowHeadings;
