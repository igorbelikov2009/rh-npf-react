"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Cell_1 = require("../Cell/Cell");
require("./Row.scss");
var Row = function (_a) {
    var cellArray = _a.cellArray;
    return (react_1["default"].createElement("tr", null, cellArray.map(function (cell, index) { return (react_1["default"].createElement(Cell_1["default"], { key: index, title: cell.title })); })));
};
exports["default"] = Row;
